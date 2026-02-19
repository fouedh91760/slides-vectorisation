import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { quizCategories } from "@/data/quiz-data";
import QuizClient from "@/components/QuizClient";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return quizCategories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const quiz = quizCategories.find((cat) => cat.slug === category);

  if (!quiz) {
    return { title: "Quiz introuvable" };
  }

  return {
    title: `Quiz ${quiz.title} - Entrainement Examen VTC | CAB Formations`,
    description: `Testez vos connaissances en ${quiz.title} avec ${quiz.questions.length} questions QCM gratuites. Preparation a l'examen theorique VTC avec corrections detaillees.`,
    alternates: {
      canonical: `https://cab-formations.fr/quiz/${quiz.slug}`,
    },
    openGraph: {
      title: `Quiz ${quiz.title} - Examen VTC`,
      description: `${quiz.questions.length} QCM gratuits en ${quiz.title} pour preparer l'examen VTC.`,
      url: `https://cab-formations.fr/quiz/${quiz.slug}`,
    },
  };
}

export default async function QuizCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const quiz = quizCategories.find((cat) => cat.slug === category);

  if (!quiz) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            name: `Quiz ${quiz.title} - Examen VTC`,
            description: quiz.description,
            educationalLevel: "Professional",
            numberOfQuestions: quiz.questions.length,
            provider: {
              "@type": "Organization",
              name: "CAB Formations",
              url: "https://cab-formations.fr",
            },
          }),
        }}
      />
      <QuizClient
        title={quiz.title}
        description={quiz.description}
        questions={quiz.questions}
        slug={quiz.slug}
      />
    </>
  );
}
