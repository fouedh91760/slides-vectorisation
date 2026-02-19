export interface FormationModule {
  title: string;
  topics: string[];
}

export interface Formation {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  priceNumeric: number;
  format: string;
  description: string;
  features: string[];
  program: FormationModule[];
  prerequisites: string;
  objectives: string;
}

export const formations: Formation[] = [
  {
    slug: "theorie-1-semaine",
    title: "Formation VTC Theorique 1 Semaine",
    subtitle: "Preparez votre examen VTC theorique en 1 semaine intensive",
    duration: "35 heures",
    price: "499\u20ac",
    priceNumeric: 499,
    format: "Presentiel",
    description:
      "La formation VTC theorique en 1 semaine est une formation intensive qui vous prepare aux 7 epreuves de l\u2019examen theorique VTC. En seulement 35 heures reparties sur 5 jours, nos formateurs experts vous transmettent toutes les connaissances necessaires pour reussir votre examen du premier coup.\n\nCette formation est ideale pour les candidats motives qui souhaitent obtenir rapidement leur carte professionnelle VTC. Le rythme soutenu permet une immersion totale dans les matieres de l\u2019examen : reglementation T3P, gestion d\u2019entreprise, securite routiere, francais, anglais, developpement commercial et reglementation nationale.\n\nNos formateurs, tous anciens professionnels du transport, s\u2019appuient sur des cas pratiques et des examens blancs pour vous preparer dans les meilleures conditions. Vous beneficiez egalement d\u2019un acces a notre plateforme e-learning pour reviser entre les sessions.",
    features: [
      "35 heures de formation intensive sur 5 jours",
      "Cours en presentiel dans nos centres agrees",
      "Formateurs experts du secteur VTC",
      "Supports de cours complets inclus",
      "Acces a la plateforme e-learning",
      "Examens blancs et corrections detaillees",
      "Accompagnement personnalise",
      "Financement possible : CPF, Pole Emploi, DIF",
      "Reglement en 3X sans frais",
      "Taux de reussite superieur a 80%",
    ],
    program: [
      {
        title: "Module 1 : Reglementation du transport public particulier de personnes (T3P)",
        topics: [
          "Cadre juridique du transport de personnes",
          "Reglementation specifique VTC",
          "Obligations du chauffeur VTC",
          "Conditions d\u2019acces a la profession",
          "Carte professionnelle et ses modalites",
        ],
      },
      {
        title: "Module 2 : Gestion d\u2019entreprise",
        topics: [
          "Creation et gestion d\u2019une entreprise VTC",
          "Statuts juridiques adaptes (auto-entrepreneur, SASU, EURL)",
          "Obligations comptables et fiscales",
          "Assurances professionnelles obligatoires",
          "Gestion financiere et rentabilite",
        ],
      },
      {
        title: "Module 3 : Securite routiere",
        topics: [
          "Code de la route approfondi",
          "Conduite preventive et eco-conduite",
          "Gestion des situations d\u2019urgence",
          "Premiers secours et securite des passagers",
          "Reglementation du vehicule de transport",
        ],
      },
      {
        title: "Module 4 : Francais et communication",
        topics: [
          "Expression ecrite et orale professionnelle",
          "Redaction de documents professionnels",
          "Communication avec la clientele",
          "Gestion des reclamations",
        ],
      },
      {
        title: "Module 5 : Anglais (niveau A2)",
        topics: [
          "Vocabulaire du transport et du tourisme",
          "Accueil de la clientele anglophone",
          "Conversations courantes en anglais",
          "Comprehension de documents en anglais",
        ],
      },
      {
        title: "Module 6 : Developpement commercial",
        topics: [
          "Connaissance du marche VTC",
          "Plateformes de reservation (Uber, Bolt, etc.)",
          "Fidelisation de la clientele",
          "Marketing et communication digitale",
          "Qualite de service et image professionnelle",
        ],
      },
    ],
    prerequisites:
      "Permis de conduire B de plus de 3 ans, casier judiciaire vierge (bulletin n\u00b02), aptitude medicale, maitrise du francais (oral et ecrit).",
    objectives:
      "A l\u2019issue de cette formation, vous serez capable de vous presenter a l\u2019examen theorique VTC et de repondre aux questions des 7 epreuves. Vous maitriserez la reglementation T3P, la gestion d\u2019entreprise, la securite routiere, et les competences linguistiques requises.",
  },
  {
    slug: "theorie-2-semaines",
    title: "Formation VTC Theorique 2 Semaines",
    subtitle: "Formation approfondie sur 2 semaines pour maximiser vos chances de reussite",
    duration: "70 heures",
    price: "1 690\u20ac",
    priceNumeric: 1690,
    format: "Presentiel",
    description:
      "La formation VTC theorique en 2 semaines est notre formule la plus populaire. Avec 70 heures de cours reparties sur 10 jours, elle offre un apprentissage approfondi de toutes les matieres de l\u2019examen theorique VTC. Le rythme equilibre entre theorie et pratique permet une assimilation optimale des connaissances.\n\nCette formation est recommandee pour les candidats qui souhaitent beneficier d\u2019un accompagnement complet et d\u2019un temps de preparation suffisant. Chaque module est traite en profondeur avec des exercices pratiques, des mises en situation et des examens blancs reguliers pour evaluer votre progression.\n\nLes groupes sont limites a 20 participants pour garantir un suivi individualise. Nos formateurs adaptent leur pedagogie au niveau de chaque stagiaire et proposent des seances de revision ciblees sur les points a ameliorer.",
    features: [
      "70 heures de formation sur 2 semaines",
      "Groupes limites a 20 participants",
      "Suivi individualise par les formateurs",
      "Supports de cours et fiches de revision",
      "Acces illimite a la plateforme e-learning",
      "Examens blancs hebdomadaires",
      "Corrections detaillees et personnalisees",
      "Methode pedagogique eprouvee",
      "Financement CPF, Pole Emploi, DIF",
      "Reglement en 3X sans frais",
      "Taux de reussite superieur a 85%",
      "Attestation de formation delivree",
    ],
    program: [
      {
        title: "Semaine 1 : Fondamentaux",
        topics: [
          "Reglementation T3P approfondie",
          "Droit du transport de personnes",
          "Gestion d\u2019entreprise : creation et statuts",
          "Comptabilite et fiscalite du VTC",
          "Securite routiere et eco-conduite",
          "Examen blanc de mi-parcours",
        ],
      },
      {
        title: "Semaine 2 : Approfondissement et preparation a l\u2019examen",
        topics: [
          "Francais professionnel et communication",
          "Anglais niveau A2 pour le transport",
          "Developpement commercial et marketing",
          "Reglementation nationale des transports",
          "Revisions generales et exercices cibles",
          "Examens blancs en conditions reelles",
        ],
      },
    ],
    prerequisites:
      "Permis de conduire B de plus de 3 ans, casier judiciaire vierge (bulletin n\u00b02), aptitude medicale, maitrise du francais (oral et ecrit).",
    objectives:
      "A l\u2019issue de cette formation approfondie, vous maitriserez parfaitement l\u2019ensemble des matieres de l\u2019examen theorique VTC. Vous serez en mesure de reussir les 7 epreuves avec une note superieure a la moyenne grace a une preparation intensive et personnalisee.",
  },
  {
    slug: "formation-complete",
    title: "Formation VTC Complete",
    subtitle: "La formation premium : theorie + pratique pour une preparation integrale",
    duration: "105 heures",
    price: "2 490\u20ac",
    priceNumeric: 2490,
    format: "Presentiel",
    description:
      "La formation VTC complete est notre offre premium qui combine 70 heures de formation theorique et 35 heures de formation pratique. Cette formule tout-en-un vous prepare integralement a l\u2019examen VTC, tant sur la partie theorique que sur l\u2019epreuve pratique de conduite professionnelle.\n\nPendant les 2 premieres semaines, vous suivez la formation theorique approfondie couvrant les 7 matieres de l\u2019examen. La 3eme semaine est consacree a la preparation pratique avec des cours de conduite professionnelle sur vehicule adapte. Vous apprendrez les techniques de conduite specifiques au metier de chauffeur VTC : conduite souple, gestion du GPS, accueil client en vehicule.\n\nCette formule est la plus complete et la plus economique pour les candidats qui souhaitent passer les deux epreuves de l\u2019examen VTC. Elle inclut egalement un accompagnement post-formation pour vous guider dans la creation de votre entreprise VTC.",
    features: [
      "105 heures de formation complete (theorie + pratique)",
      "70 heures de theorie + 35 heures de pratique",
      "Vehicule de formation fourni (boite automatique)",
      "Formateurs anciens chauffeurs professionnels",
      "Preparation integrale aux 2 epreuves de l\u2019examen",
      "Accompagnement creation d\u2019entreprise inclus",
      "Acces illimite a la plateforme e-learning",
      "Examens blancs en conditions reelles",
      "Suivi post-formation personnalise",
      "Financement CPF, Pole Emploi, DIF",
      "Reglement en 3X sans frais",
      "Meilleur rapport qualite-prix",
    ],
    program: [
      {
        title: "Semaines 1-2 : Formation theorique",
        topics: [
          "Reglementation T3P et droit des transports",
          "Gestion d\u2019entreprise et comptabilite",
          "Securite routiere et eco-conduite",
          "Francais professionnel",
          "Anglais niveau A2",
          "Developpement commercial",
          "Reglementation nationale",
        ],
      },
      {
        title: "Semaine 3 : Formation pratique",
        topics: [
          "Conduite professionnelle sur vehicule automatique",
          "Accueil et prise en charge du client",
          "Utilisation du GPS et connaissance des itineraires",
          "Conduite souple et confortable",
          "Gestion du stress en situation d\u2019examen",
          "Examen blanc pratique en conditions reelles",
        ],
      },
      {
        title: "Accompagnement post-formation",
        topics: [
          "Aide a la creation d\u2019entreprise (statut, immatriculation)",
          "Inscription sur les plateformes VTC",
          "Conseils pour le lancement de l\u2019activite",
          "Suivi personnalise pendant 3 mois",
        ],
      },
    ],
    prerequisites:
      "Permis de conduire B de plus de 3 ans, casier judiciaire vierge (bulletin n\u00b02), aptitude medicale, maitrise du francais (oral et ecrit). Vehicule non necessaire pour la partie pratique (fourni par le centre).",
    objectives:
      "A l\u2019issue de cette formation complete, vous serez pret a passer les 2 epreuves de l\u2019examen VTC (theorique et pratique). Vous disposerez egalement de toutes les cles pour creer votre entreprise VTC et lancer votre activite de chauffeur professionnel.",
  },
  {
    slug: "e-learning-theorique",
    title: "Formation VTC Theorique E-learning",
    subtitle: "Preparez l\u2019examen VTC a votre rythme depuis chez vous",
    duration: "A votre rythme",
    price: "499\u20ac",
    priceNumeric: 499,
    format: "A distance",
    description:
      "La formation VTC theorique en e-learning vous permet de preparer l\u2019examen theorique VTC depuis chez vous, a votre propre rythme. Accessible 24h/24 et 7j/7 depuis votre ordinateur, tablette ou smartphone, cette formation couvre l\u2019integralite des 7 matieres de l\u2019examen.\n\nNotre plateforme e-learning propose des cours video de qualite professionnelle, des fiches de revision synthetiques, des QCM d\u2019entrainement et des examens blancs en conditions reelles. Chaque module est structure de maniere progressive pour faciliter l\u2019apprentissage et vous permettre de mesurer votre progression.\n\nVous beneficiez d\u2019un acces illimite a la plateforme pendant 6 mois, ainsi que d\u2019un accompagnement par nos formateurs via un systeme de messagerie integree. Des webinaires de revision sont organises regulierement pour repondre a vos questions et approfondir certains sujets.",
    features: [
      "Acces 24/7 a la plateforme e-learning pendant 6 mois",
      "Cours video de qualite professionnelle",
      "Plus de 500 QCM d\u2019entrainement",
      "Examens blancs en conditions reelles",
      "Fiches de revision telechargeables",
      "Suivi de progression en temps reel",
      "Messagerie avec les formateurs",
      "Webinaires de revision reguliers",
      "Compatible ordinateur, tablette, smartphone",
      "Financement CPF, Pole Emploi",
      "Reglement en 3X sans frais",
      "Mise a jour continue des contenus",
    ],
    program: [
      {
        title: "Module 1 : Reglementation T3P (en ligne)",
        topics: [
          "12 cours video sur la reglementation",
          "QCM d\u2019entrainement apres chaque lecon",
          "Fiches memotechniques",
          "Cas pratiques interactifs",
        ],
      },
      {
        title: "Module 2 : Gestion d\u2019entreprise (en ligne)",
        topics: [
          "10 cours video sur la gestion",
          "Exercices de comptabilite simplifie",
          "Simulateur de creation d\u2019entreprise",
          "QCM de validation",
        ],
      },
      {
        title: "Module 3 : Securite routiere (en ligne)",
        topics: [
          "8 cours video sur la securite",
          "Quiz interactifs sur le code de la route",
          "Videos de mise en situation",
          "QCM d\u2019entrainement",
        ],
      },
      {
        title: "Module 4 : Francais et Anglais (en ligne)",
        topics: [
          "Cours de francais professionnel",
          "Exercices de comprehension ecrite",
          "Cours d\u2019anglais A2 avec audio",
          "Mises en situation en anglais",
        ],
      },
      {
        title: "Module 5 : Developpement commercial (en ligne)",
        topics: [
          "Cours video sur le marketing VTC",
          "Etudes de cas reelles",
          "Strategies de fidelisation",
          "QCM final de validation",
        ],
      },
      {
        title: "Examens blancs",
        topics: [
          "5 examens blancs complets",
          "Correction detaillee automatique",
          "Statistiques de performance",
          "Recommandations personnalisees",
        ],
      },
    ],
    prerequisites:
      "Permis de conduire B de plus de 3 ans, casier judiciaire vierge (bulletin n\u00b02), aptitude medicale. Connexion internet stable et equipement informatique (ordinateur, tablette ou smartphone).",
    objectives:
      "A l\u2019issue de cette formation a distance, vous maitriserez l\u2019ensemble des connaissances theoriques necessaires pour reussir l\u2019examen VTC. La flexibilite du e-learning vous permet de vous former a votre rythme tout en beneficiant d\u2019un accompagnement de qualite.",
  },
  {
    slug: "e-learning-pratique",
    title: "Formation VTC Pratique E-learning",
    subtitle: "Preparez l\u2019epreuve pratique VTC avec nos cours en ligne",
    duration: "A votre rythme",
    price: "399\u20ac",
    priceNumeric: 399,
    format: "A distance",
    description:
      "La formation VTC pratique en e-learning est concue pour vous preparer a l\u2019epreuve pratique de l\u2019examen VTC. Grace a des cours video detailles, des simulations de parcours et des conseils de formateurs experimentees, vous apprendrez les techniques de conduite professionnelle attendues par les examinateurs.\n\nCette formation couvre tous les aspects de l\u2019epreuve pratique : accueil du client, conduite souple et securisee, utilisation du GPS, gestion des itineraires, et comportement professionnel en vehicule. Les videos sont tournees en conditions reelles pour vous offrir une immersion complete.\n\nEn complement des cours en ligne, vous pouvez reserver des seances de coaching individuel avec nos formateurs pour perfectionner votre technique de conduite. Cette formule est ideale pour les candidats qui disposent de leur propre vehicule et souhaitent se preparer a distance.",
    features: [
      "Cours video de conduite professionnelle",
      "Simulations de parcours d\u2019examen",
      "Videos tournees en conditions reelles",
      "Conseils de formateurs experimentes",
      "Fiches techniques de conduite",
      "Coaching individuel en option",
      "Acces a la plateforme pendant 6 mois",
      "Compatible tous appareils",
      "Financement CPF, Pole Emploi",
      "Reglement en 3X sans frais",
    ],
    program: [
      {
        title: "Module 1 : Preparation a l\u2019epreuve pratique",
        topics: [
          "Presentation de l\u2019epreuve et criteres d\u2019evaluation",
          "Grille de notation des examinateurs",
          "Erreurs eliminatoires a eviter",
          "Conseils pour le jour de l\u2019examen",
        ],
      },
      {
        title: "Module 2 : Conduite professionnelle",
        topics: [
          "Techniques de conduite souple",
          "Anticipation et eco-conduite",
          "Conduite en milieu urbain et periurbain",
          "Gestion des situations complexes",
        ],
      },
      {
        title: "Module 3 : Accueil et service client",
        topics: [
          "Accueil du client a bord du vehicule",
          "Communication professionnelle",
          "Gestion des bagages et du confort",
          "Attitude et presentation personnelle",
        ],
      },
      {
        title: "Module 4 : Navigation et itineraires",
        topics: [
          "Utilisation optimale du GPS",
          "Connaissance des itineraires principaux",
          "Gestion des deviations et embouteillages",
          "Points d\u2019interet touristiques",
        ],
      },
    ],
    prerequisites:
      "Avoir reussi l\u2019examen theorique VTC (ou etre en cours de preparation). Permis de conduire B de plus de 3 ans. Connexion internet stable.",
    objectives:
      "A l\u2019issue de cette formation, vous connaitrez parfaitement les attendus de l\u2019epreuve pratique VTC et les techniques de conduite professionnelle. Vous serez en mesure de vous presenter sereinement a l\u2019examen pratique.",
  },
  {
    slug: "formation-pratique-vtc",
    title: "Formation VTC Pratique + Vehicule",
    subtitle: "Formation pratique avec mise a disposition d\u2019un vehicule equipe",
    duration: "70 heures",
    price: "159\u20ac",
    priceNumeric: 159,
    format: "Presentiel",
    description:
      "La formation VTC pratique avec vehicule est la solution cle en main pour preparer votre epreuve pratique. Nous mettons a votre disposition un vehicule equipe (Mazda 6, Peugeot ou Hyundai) en boite automatique, avec GPS integre et camera de recul. Vous n\u2019avez qu\u2019a vous concentrer sur votre apprentissage.\n\nNos formateurs sont d\u2019anciens chauffeurs de voitures de luxe avec plus de 10 ans d\u2019experience dans le transport de personnes. Ils vous transmettent les techniques de conduite professionnelle, l\u2019art de l\u2019accueil client et les subtilites du metier de chauffeur VTC. Leur expertise terrain est un atout majeur pour votre reussite a l\u2019examen.\n\nPlusieurs formules sont disponibles selon vos besoins : location du vehicule seul a 159\u20ac, e-learning + vehicule a 200\u20ac, 2 heures de formation individuelle + vehicule a 499\u20ac, ou 4 heures de formation individuelle + vehicule a 699\u20ac. Chaque formule inclut l\u2019assurance tous risques et l\u2019assistance en cas de panne.",
    features: [
      "Vehicule equipe : Mazda 6, Peugeot ou Hyundai",
      "Boite automatique pour plus de confort",
      "GPS integre et camera de recul",
      "Formateurs anciens chauffeurs de luxe (10+ ans d\u2019experience)",
      "Assurance tous risques incluse",
      "Assistance depannage incluse",
      "Formule vehicule seul : 159\u20ac",
      "Formule e-learning + vehicule : 200\u20ac",
      "Formule 2h formation + vehicule : 499\u20ac",
      "Formule 4h formation + vehicule : 699\u20ac",
      "Vehicule disponible le jour de l\u2019examen",
      "Financement CPF, Pole Emploi",
    ],
    program: [
      {
        title: "Formule 1 : Location vehicule seul (159\u20ac)",
        topics: [
          "Mise a disposition du vehicule pour l\u2019examen pratique",
          "Vehicule en boite automatique (Mazda 6, Peugeot ou Hyundai)",
          "GPS integre et camera de recul",
          "Assurance tous risques incluse",
          "Prise en main du vehicule avant l\u2019examen",
        ],
      },
      {
        title: "Formule 2 : E-learning + Vehicule (200\u20ac)",
        topics: [
          "Acces complet a la formation e-learning pratique",
          "Cours video de conduite professionnelle",
          "Mise a disposition du vehicule pour l\u2019examen",
          "Fiches techniques et conseils personnalises",
        ],
      },
      {
        title: "Formule 3 : 2h de formation + Vehicule (499\u20ac)",
        topics: [
          "2 heures de formation individuelle en vehicule",
          "Parcours type de l\u2019examen pratique",
          "Corrections en temps reel par le formateur",
          "Mise a disposition du vehicule pour l\u2019examen",
          "Conseils personnalises et debriefing",
        ],
      },
      {
        title: "Formule 4 : 4h de formation + Vehicule (699\u20ac)",
        topics: [
          "4 heures de formation individuelle approfondie",
          "Multiples parcours d\u2019examen pratique",
          "Perfectionnement de la conduite professionnelle",
          "Mise en situation d\u2019examen complette",
          "Mise a disposition du vehicule pour l\u2019examen",
          "Debriefing detaille et plan d\u2019amelioration",
        ],
      },
    ],
    prerequisites:
      "Avoir reussi l\u2019examen theorique VTC. Permis de conduire B de plus de 3 ans. Casier judiciaire vierge (bulletin n\u00b02).",
    objectives:
      "Selon la formule choisie, vous beneficierez d\u2019un vehicule equipe pour passer l\u2019epreuve pratique et/ou d\u2019une formation individuelle avec un formateur expert pour maximiser vos chances de reussite.",
  },
  {
    slug: "formation-continue",
    title: "Formation VTC Continue",
    subtitle: "Formation obligatoire pour le renouvellement de votre carte professionnelle VTC",
    duration: "14 heures",
    price: "399\u20ac",
    priceNumeric: 399,
    format: "Presentiel",
    description:
      "La formation VTC continue est obligatoire tous les 5 ans pour renouveler votre carte professionnelle VTC. D\u2019une duree de 14 heures reparties sur 2 jours, elle vous permet de mettre a jour vos connaissances et de rester en conformite avec la reglementation en vigueur.\n\nCette formation couvre les evolutions reglementaires recentes, les nouvelles pratiques du metier et les innovations technologiques du secteur VTC. C\u2019est egalement l\u2019occasion d\u2019echanger avec d\u2019autres professionnels du secteur et de partager vos experiences.\n\nA l\u2019issue de la formation, une attestation de stage vous est delivree. Ce document est indispensable pour deposer votre demande de renouvellement de carte professionnelle aupres de la prefecture. Nous vous accompagnons egalement dans les demarches administratives si necessaire.",
    features: [
      "14 heures de formation sur 2 jours",
      "Formation obligatoire tous les 5 ans",
      "Mise a jour des connaissances reglementaires",
      "Echanges entre professionnels du VTC",
      "Attestation de stage delivree",
      "Accompagnement pour le renouvellement de carte",
      "Formateurs experts du secteur",
      "Cours en presentiel dans nos centres agrees",
      "Financement CPF, Pole Emploi",
      "Reglement en 3X sans frais",
      "Demarches administratives accompagnees",
    ],
    program: [
      {
        title: "Jour 1 : Mise a jour reglementaire (7h)",
        topics: [
          "Evolutions de la reglementation T3P",
          "Nouvelles obligations legales du chauffeur VTC",
          "Actualites juridiques du secteur",
          "Securite routiere : nouvelles regles et bonnes pratiques",
          "Responsabilite civile et penale du chauffeur",
        ],
      },
      {
        title: "Jour 2 : Perfectionnement professionnel (7h)",
        topics: [
          "Nouvelles technologies et outils du VTC",
          "Evolution des plateformes de reservation",
          "Qualite de service et satisfaction client",
          "Gestion du stress et bien-etre au travail",
          "Eco-conduite et developpement durable",
          "Bilan et remise de l\u2019attestation de stage",
        ],
      },
    ],
    prerequisites:
      "Etre titulaire d\u2019une carte professionnelle VTC en cours de validite ou expiree depuis moins de 5 ans.",
    objectives:
      "A l\u2019issue de cette formation continue, vous serez a jour de vos connaissances reglementaires et professionnelles. Vous obtiendrez l\u2019attestation de stage necessaire au renouvellement de votre carte professionnelle VTC.",
  },
];
