export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizCategory {
  slug: string;
  title: string;
  description: string;
  coefficient: number;
  questions: QuizQuestion[];
}

export const quizCategories: QuizCategory[] = [
  {
    slug: "reglementation-t3p",
    title: "Reglementation T3P",
    description: "Questions sur la reglementation du transport public particulier de personnes",
    coefficient: 3,
    questions: [
      {
        question: "Quelle est la duree de validite de la carte professionnelle VTC ?",
        options: ["3 ans", "5 ans", "10 ans", "Illimitee"],
        correctIndex: 1,
        explanation:
          "La carte professionnelle VTC est valable 5 ans. Son renouvellement est conditionne par le suivi d'une formation continue de 14 heures.",
      },
      {
        question: "Quel organisme delivre la carte professionnelle VTC ?",
        options: [
          "La mairie de votre commune",
          "La prefecture du departement",
          "La chambre des metiers",
          "Le ministere des transports",
        ],
        correctIndex: 1,
        explanation:
          "C'est la prefecture du departement de domicile du demandeur qui delivre la carte professionnelle VTC, apres verification des conditions requises.",
      },
      {
        question: "Quelle est l'anciennete minimale du permis de conduire B requise pour devenir VTC ?",
        options: ["1 an", "2 ans", "3 ans", "5 ans"],
        correctIndex: 2,
        explanation:
          "Pour devenir chauffeur VTC, il faut etre titulaire du permis de conduire de categorie B depuis au moins 3 ans (ou 2 ans en cas de conduite accompagnee).",
      },
      {
        question: "Qu'est-ce que le registre des VTC ?",
        options: [
          "Un registre tenu par la prefecture pour recenser les VTC",
          "Un registre tenu par le ministere des transports",
          "Un fichier national gere par le Conseil National des Professions de l'Automobile",
          "Un registre departemental des chauffeurs",
        ],
        correctIndex: 0,
        explanation:
          "Le registre des VTC est un registre tenu par la prefecture qui recense l'ensemble des exploitants de VTC et leurs vehicules.",
      },
      {
        question: "Un chauffeur VTC peut-il prendre en charge un client sans reservation prealable ?",
        options: [
          "Oui, a tout moment",
          "Oui, mais uniquement a un aeroport",
          "Non, la reservation prealable est obligatoire",
          "Oui, si le client est a moins de 50 metres",
        ],
        correctIndex: 2,
        explanation:
          "Contrairement aux taxis, les VTC ne peuvent prendre en charge des clients que sur reservation prealable. La maraude (chercher des clients dans la rue) est strictement interdite pour les VTC.",
      },
      {
        question: "Quelle est la signalisation obligatoire sur un vehicule VTC ?",
        options: [
          "Un lumineux sur le toit",
          "Une vignette verte autocollante sur le pare-brise",
          "Un macaron bleu sur la carrosserie",
          "Aucune signalisation n'est obligatoire",
        ],
        correctIndex: 1,
        explanation:
          "Les vehicules VTC doivent apposer une vignette verte autocollante sur le pare-brise avant, visible de l'exterieur. Cette vignette est delivree par la prefecture.",
      },
      {
        question: "Quel est l'age maximal d'un vehicule VTC en exploitation ?",
        options: [
          "5 ans",
          "6 ans",
          "7 ans",
          "Il n'y a pas de limite d'age",
        ],
        correctIndex: 1,
        explanation:
          "Un vehicule VTC ne doit pas depasser 6 ans d'anciennete (a compter de la date de premiere mise en circulation). Au-dela, il doit etre remplace.",
      },
      {
        question: "Le chauffeur VTC est-il oblige de posseder une assurance responsabilite civile professionnelle ?",
        options: [
          "Non, l'assurance auto classique suffit",
          "Oui, c'est obligatoire",
          "Seulement pour les vehicules de plus de 5 places",
          "Seulement si le chiffre d'affaires depasse 50 000 euros",
        ],
        correctIndex: 1,
        explanation:
          "Tout exploitant VTC doit souscrire une assurance responsabilite civile professionnelle couvrant les dommages causes aux passagers dans le cadre de son activite.",
      },
      {
        question: "Quel document le chauffeur VTC doit-il avoir a bord du vehicule en permanence ?",
        options: [
          "Uniquement le permis de conduire",
          "La carte professionnelle VTC et le certificat d'inscription au registre",
          "Le diplome de formation",
          "Une copie du contrat de travail",
        ],
        correctIndex: 1,
        explanation:
          "Le chauffeur VTC doit toujours avoir a bord sa carte professionnelle VTC et le certificat d'inscription au registre des VTC. Ces documents doivent etre presentes en cas de controle.",
      },
      {
        question: "Quelle loi encadre principalement l'activite des VTC en France ?",
        options: [
          "La loi Macron de 2015",
          "La loi Thevenoud du 1er octobre 2014",
          "La loi Grenelle de 2009",
          "La loi Sapin de 2016",
        ],
        correctIndex: 1,
        explanation:
          "La loi n\u00b02014-1104 du 1er octobre 2014 relative aux taxis et aux voitures de transport avec chauffeur (loi Thevenoud) constitue le cadre legislatif principal de l'activite VTC en France.",
      },
    ],
  },
  {
    slug: "gestion-entreprise",
    title: "Gestion d'entreprise",
    description: "Questions sur la creation et la gestion d'une entreprise VTC",
    coefficient: 2,
    questions: [
      {
        question: "Quel statut juridique est le plus couramment choisi par les chauffeurs VTC independants ?",
        options: [
          "SAS (Societe par Actions Simplifiee)",
          "SARL (Societe a Responsabilite Limitee)",
          "Micro-entreprise (auto-entrepreneur)",
          "SA (Societe Anonyme)",
        ],
        correctIndex: 2,
        explanation:
          "Le statut de micro-entrepreneur (auto-entrepreneur) est le plus couramment choisi par les chauffeurs VTC debutants en raison de sa simplicite de creation et de gestion, et de ses charges sociales calculees sur le chiffre d'affaires reel.",
      },
      {
        question: "Quel est le plafond de chiffre d'affaires annuel pour un auto-entrepreneur en prestation de services (2024) ?",
        options: ["36 800 euros", "77 700 euros", "188 700 euros", "100 000 euros"],
        correctIndex: 1,
        explanation:
          "En 2024, le plafond de chiffre d'affaires pour un auto-entrepreneur en prestation de services est de 77 700 euros. Au-dela, il faut changer de statut juridique.",
      },
      {
        question: "Qu'est-ce que le CFE (Centre de Formalites des Entreprises) pour un chauffeur VTC ?",
        options: [
          "La Chambre de Commerce et d'Industrie (CCI)",
          "L'URSSAF",
          "La Chambre des Metiers et de l'Artisanat",
          "La prefecture",
        ],
        correctIndex: 1,
        explanation:
          "Pour les auto-entrepreneurs, le CFE competent est l'URSSAF. C'est aupres de cet organisme que doit etre effectuee la declaration de debut d'activite.",
      },
      {
        question: "Quelle est la TVA applicable pour un auto-entrepreneur VTC sous le seuil de franchise ?",
        options: [
          "TVA a 5,5%",
          "TVA a 10%",
          "TVA a 20%",
          "Pas de TVA (franchise en base)",
        ],
        correctIndex: 3,
        explanation:
          "En micro-entreprise, le chauffeur VTC beneficie de la franchise en base de TVA : il ne facture pas la TVA a ses clients et ne peut pas la recuperer sur ses achats.",
      },
      {
        question: "Quel document comptable un auto-entrepreneur VTC doit-il obligatoirement tenir ?",
        options: [
          "Un bilan comptable annuel",
          "Un livre des recettes",
          "Un compte de resultat",
          "Un registre des immobilisations",
        ],
        correctIndex: 1,
        explanation:
          "L'auto-entrepreneur doit obligatoirement tenir un livre des recettes, qui enregistre chronologiquement toutes les recettes encaissees avec les references des pieces justificatives.",
      },
      {
        question: "Quel type d'assurance est specifiquement obligatoire pour l'activite VTC en plus de l'assurance auto ?",
        options: [
          "Assurance dommages ouvrage",
          "Assurance responsabilite civile professionnelle (RC Pro)",
          "Assurance perte d'exploitation",
          "Assurance multirisque habitation",
        ],
        correctIndex: 1,
        explanation:
          "En plus de l'assurance automobile classique, le chauffeur VTC doit souscrire une assurance responsabilite civile professionnelle (RC Pro) qui couvre les risques lies a son activite professionnelle.",
      },
      {
        question: "Que represente la SASU pour un chauffeur VTC ?",
        options: [
          "Societe A Statut Unique",
          "Societe par Actions Simplifiee Unipersonnelle",
          "Societe d'Auto-Supervision Universelle",
          "Syndicat des Artisans du Service Urbain",
        ],
        correctIndex: 1,
        explanation:
          "La SASU (Societe par Actions Simplifiee Unipersonnelle) est un statut juridique permettant de creer une societe seul, avec une responsabilite limitee aux apports et la possibilite de se verser des dividendes.",
      },
      {
        question: "Quelle cotisation sociale doit payer un auto-entrepreneur VTC sur son chiffre d'affaires ?",
        options: [
          "Environ 12,3%",
          "Environ 21,1%",
          "Environ 33%",
          "Environ 45%",
        ],
        correctIndex: 1,
        explanation:
          "Un auto-entrepreneur en prestation de services BIC (comme le VTC) paie environ 21,1% de cotisations sociales sur son chiffre d'affaires. Ce taux est forfaitaire et couvre l'ensemble des charges sociales.",
      },
      {
        question: "Qu'est-ce que le Kbis pour une societe VTC (SASU, EURL) ?",
        options: [
          "Le numero de TVA intracommunautaire",
          "L'extrait d'immatriculation au registre du commerce",
          "Le certificat d'aptitude professionnelle",
          "Le code d'activite APE",
        ],
        correctIndex: 1,
        explanation:
          "Le Kbis est l'extrait d'immatriculation au Registre du Commerce et des Societes (RCS). C'est la carte d'identite de l'entreprise, prouvant son existence juridique.",
      },
      {
        question: "Quelle declaration le chauffeur VTC auto-entrepreneur doit-il effectuer mensuellement ou trimestriellement ?",
        options: [
          "Declaration de TVA",
          "Declaration de chiffre d'affaires a l'URSSAF",
          "Declaration des benefices a l'administration fiscale",
          "Declaration d'activite a la prefecture",
        ],
        correctIndex: 1,
        explanation:
          "L'auto-entrepreneur doit declarer son chiffre d'affaires a l'URSSAF chaque mois ou chaque trimestre (selon l'option choisie) pour le calcul et le paiement de ses cotisations sociales.",
      },
    ],
  },
  {
    slug: "securite-routiere",
    title: "Securite routiere",
    description: "Questions sur la securite routiere et la conduite professionnelle",
    coefficient: 2,
    questions: [
      {
        question: "Quelle est la distance de securite minimale a respecter a 130 km/h sur autoroute ?",
        options: ["50 metres", "73 metres", "90 metres", "130 metres"],
        correctIndex: 2,
        explanation:
          "A 130 km/h, la distance de securite minimale est d'environ 90 metres, ce qui correspond a 2 secondes de temps de reaction. La regle est de maintenir au moins 2 secondes d'intervalle avec le vehicule qui precede.",
      },
      {
        question: "Quel est le taux d'alcoolemie maximal autorise pour un conducteur professionnel VTC ?",
        options: [
          "0 g/L de sang",
          "0,2 g/L de sang",
          "0,5 g/L de sang",
          "0,8 g/L de sang",
        ],
        correctIndex: 1,
        explanation:
          "Pour les conducteurs de transport en commun ou de vehicules de transport de personnes, le taux maximal autorise est de 0,2 g/L de sang (soit 0,10 mg/L d'air expire), soit quasiment zero tolerance.",
      },
      {
        question: "Qu'est-ce que l'eco-conduite ?",
        options: [
          "Conduire uniquement des vehicules electriques",
          "Un style de conduite visant a reduire la consommation de carburant et les emissions",
          "Conduire sans utiliser le GPS",
          "Rouler exclusivement en ville",
        ],
        correctIndex: 1,
        explanation:
          "L'eco-conduite est un ensemble de comportements au volant permettant de reduire la consommation de carburant (jusqu'a 15%), les emissions de CO2, l'usure du vehicule et le risque d'accident.",
      },
      {
        question: "En cas d'accident corporel, quel est le premier geste a effectuer ?",
        options: [
          "Appeler un avocat",
          "Deplacer les blesses",
          "Proteger, alerter, secourir (PAS)",
          "Remplir le constat amiable",
        ],
        correctIndex: 2,
        explanation:
          "En cas d'accident, il faut respecter la sequence PAS : Proteger la zone (balisage, gilet, triangle), Alerter les secours (15, 18 ou 112), et Secourir les victimes sans les deplacer sauf danger immediat.",
      },
      {
        question: "Quelle est la vitesse maximale autorisee en agglomeration en l'absence de signalisation specifique ?",
        options: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"],
        correctIndex: 1,
        explanation:
          "En agglomeration, la vitesse maximale autorisee est de 50 km/h en l'absence de signalisation specifique. Certaines zones peuvent etre limitees a 30 km/h (zone 30).",
      },
      {
        question: "Quelle est la principale cause d'accident mortel sur les routes en France ?",
        options: [
          "Le mauvais temps",
          "La vitesse excessive",
          "Le defaut de signalisation",
          "Les animaux sur la route",
        ],
        correctIndex: 1,
        explanation:
          "La vitesse excessive ou inadaptee est la premiere cause d'accidents mortels en France. Elle est impliquee dans environ 30% des accidents mortels.",
      },
      {
        question: "Que signifie un panneau de signalisation a fond bleu sur autoroute ?",
        options: [
          "Une interdiction",
          "Un danger",
          "Une indication ou direction",
          "Une obligation",
        ],
        correctIndex: 2,
        explanation:
          "Sur autoroute, les panneaux a fond bleu sont des panneaux d'indication ou de direction. Ils informent le conducteur des directions, sorties, aires de repos, etc.",
      },
      {
        question: "A partir de combien de points perdus le permis de conduire est-il invalide ?",
        options: [
          "6 points",
          "8 points",
          "10 points",
          "12 points (solde a zero)",
        ],
        correctIndex: 3,
        explanation:
          "Le permis de conduire est invalide lorsque le solde de points atteint zero, c'est-a-dire lorsque les 12 points ont ete retires. Le conducteur recoit une lettre recommandee d'invalidation.",
      },
      {
        question: "Quel equipement de securite est obligatoire dans un vehicule VTC pour les passagers ?",
        options: [
          "Un extincteur uniquement",
          "Des gilets de securite pour chaque passager",
          "Un ethylotest, un gilet et un triangle de presignalisation",
          "Uniquement des ceintures de securite fonctionnelles",
        ],
        correctIndex: 2,
        explanation:
          "Tout vehicule doit etre equipe d'un ethylotest (non usage et non perime), d'un gilet de securite homologue et d'un triangle de presignalisation. Les ceintures de securite doivent bien sur etre fonctionnelles.",
      },
      {
        question: "Quelle est la duree maximale de conduite quotidienne recommandee pour un chauffeur VTC ?",
        options: [
          "6 heures",
          "8 heures",
          "10 heures",
          "Il n'y a pas de limite",
        ],
        correctIndex: 2,
        explanation:
          "Bien que la reglementation VTC ne fixe pas de duree maximale stricte comme pour les poids lourds, il est recommande de ne pas depasser 10 heures de conduite par jour pour des raisons de securite. Les pauses regulieres sont essentielles.",
      },
    ],
  },
  {
    slug: "francais",
    title: "Francais",
    description: "Questions sur la maitrise de la langue francaise et la communication professionnelle",
    coefficient: 1,
    questions: [
      {
        question: "Quelle est la forme correcte de cette phrase ? 'Le chauffeur ... les clients a l'aeroport.'",
        options: [
          "a conduis",
          "a conduit",
          "a conduisit",
          "avait conduire",
        ],
        correctIndex: 1,
        explanation:
          "Le passe compose du verbe 'conduire' avec l'auxiliaire 'avoir' est 'a conduit'. Le participe passe de 'conduire' est 'conduit'.",
      },
      {
        question: "Quel est le synonyme de 'courtoisie' dans un contexte professionnel ?",
        options: ["Rapidite", "Politesse", "Efficacite", "Discretion"],
        correctIndex: 1,
        explanation:
          "La courtoisie est synonyme de politesse. C'est une qualite essentielle pour un chauffeur VTC qui doit faire preuve de savoir-vivre et de respect envers ses clients.",
      },
      {
        question: "Comment s'ecrit correctement le pluriel de 'monsieur' ?",
        options: ["Monsieurs", "Messieurs", "Messieur", "Monsieur (invariable)"],
        correctIndex: 1,
        explanation:
          "Le pluriel de 'monsieur' est 'messieurs'. C'est un pluriel irregulier en francais qu'il est important de maitriser dans la communication professionnelle.",
      },
      {
        question: "Quelle formule est la plus appropriee pour accueillir un client dans un VTC ?",
        options: [
          "Salut, ca va ?",
          "Bonjour Monsieur/Madame, bienvenue a bord. Puis-je prendre vos bagages ?",
          "Eh, montez !",
          "Bonsoir. C'est pour ou ?",
        ],
        correctIndex: 1,
        explanation:
          "La formule de politesse complete et professionnelle est la plus appropriee. Elle montre le respect, l'attention et le professionnalisme attendus d'un chauffeur VTC.",
      },
      {
        question: "Identifiez la phrase sans faute d'orthographe :",
        options: [
          "Je vous remerc\u00ede de votre patience.",
          "Je vous remerci de votre patience.",
          "Je vous remercie de votre patience.",
          "Je vous remercie de votre patiance.",
        ],
        correctIndex: 2,
        explanation:
          "La forme correcte est 'Je vous remercie de votre patience.' Le verbe 'remercier' se conjugue en '-ie' a la premiere personne du present, et 'patience' s'ecrit avec -ence.",
      },
      {
        question: "Quel est le registre de langue le plus adapte pour un chauffeur VTC avec sa clientele ?",
        options: [
          "Le registre familier",
          "Le registre courant a soutenu",
          "Le registre argotique",
          "Le registre technique",
        ],
        correctIndex: 1,
        explanation:
          "Le registre courant a soutenu est le plus adapte pour un chauffeur VTC. Il permet d'etre professionnel et respectueux tout en restant accessible et chaleureux avec la clientele.",
      },
      {
        question: "Comment ecrit-on correctement l'adresse suivante : '15 avenue des Champs-Elysees' ?",
        options: [
          "15, Avenue des champs-elysees",
          "15, avenue des Champs-Elysees",
          "15 Avenue Des Champs Elysees",
          "15 avenue des champs elysees",
        ],
        correctIndex: 1,
        explanation:
          "L'ecriture correcte comporte une virgule apres le numero, 'avenue' en minuscule (nom commun), et 'Champs-Elysees' avec des majuscules et un trait d'union (nom propre compose).",
      },
      {
        question: "Quel mot complete correctement cette phrase ? 'La course ... 45 minutes.'",
        options: ["a duree", "a dure", "a durer", "a dure"],
        correctIndex: 3,
        explanation:
          "Le passe compose du verbe 'durer' est 'a dure' (avec un accent aigu sur le e). Le participe passe de 'durer' est 'dure'.",
      },
      {
        question: "Quelle est la bonne conjugaison ? 'Nous vous ... a l'heure convenue.'",
        options: [
          "attendons",
          "attendront",
          "attenderons",
          "attendions",
        ],
        correctIndex: 0,
        explanation:
          "Au present de l'indicatif, la premiere personne du pluriel du verbe 'attendre' est 'attendons'. Cette forme est utilisee pour exprimer une action au moment present.",
      },
      {
        question: "Quel est le sens du mot 'itineraire' ?",
        options: [
          "Le vehicule utilise pour le transport",
          "Le chemin ou la route a suivre pour aller d'un point a un autre",
          "Le prix de la course",
          "Le temps de trajet",
        ],
        correctIndex: 1,
        explanation:
          "Un itineraire designe le chemin, la route ou le parcours a suivre pour se rendre d'un point a un autre. C'est un terme essentiel dans le vocabulaire du transport de personnes.",
      },
    ],
  },
  {
    slug: "anglais",
    title: "Anglais (niveau A2)",
    description: "Questions de comprehension en anglais pour l'accueil de la clientele internationale",
    coefficient: 1,
    questions: [
      {
        question: "What does a VTC driver say when greeting a client at the airport?",
        options: [
          "Hey, what's up?",
          "Good morning, welcome. May I help you with your luggage?",
          "You're late!",
          "Where do you want to go?",
        ],
        correctIndex: 1,
        explanation:
          "La formule 'Good morning, welcome. May I help you with your luggage?' est la salutation professionnelle appropriee. Elle est polie, accueillante et propose une aide concrete au client.",
      },
      {
        question: "How do you say 'Attachez votre ceinture de securite' in English?",
        options: [
          "Open your seatbelt, please.",
          "Please fasten your seatbelt.",
          "Remove your belt, please.",
          "Please close the door.",
        ],
        correctIndex: 1,
        explanation:
          "'Please fasten your seatbelt' signifie 'Veuillez attacher votre ceinture de securite'. 'Fasten' signifie attacher/boucler, et 'seatbelt' est la ceinture de securite.",
      },
      {
        question: "A client asks: 'How long will it take to get to the hotel?' What does this mean?",
        options: [
          "Combien coute le trajet jusqu'a l'hotel ?",
          "Combien de temps faut-il pour arriver a l'hotel ?",
          "Ou se trouve l'hotel ?",
          "Pouvez-vous m'emmener a l'hotel ?",
        ],
        correctIndex: 1,
        explanation:
          "'How long will it take to get to the hotel?' signifie 'Combien de temps faudra-t-il pour arriver a l'hotel ?' 'How long' = combien de temps, 'to get to' = arriver a.",
      },
      {
        question: "Which sentence is correct to offer a bottle of water to a passenger?",
        options: [
          "You want water?",
          "Would you like a bottle of water?",
          "Take water now.",
          "Water is here for you take.",
        ],
        correctIndex: 1,
        explanation:
          "'Would you like a bottle of water?' est la formule polie et correcte pour offrir de l'eau. 'Would you like...?' est une expression de politesse courante en anglais pour faire une offre.",
      },
      {
        question: "What does 'I'd like to go to the Eiffel Tower, please' mean?",
        options: [
          "J'aimerais visiter la Tour Eiffel demain.",
          "J'aimerais aller a la Tour Eiffel, s'il vous plait.",
          "Pouvez-vous me montrer la Tour Eiffel ?",
          "Combien coute l'entree de la Tour Eiffel ?",
        ],
        correctIndex: 1,
        explanation:
          "'I'd like to go to the Eiffel Tower, please' signifie 'J'aimerais aller a la Tour Eiffel, s'il vous plait'. 'I'd like' est la contraction de 'I would like' (je voudrais/j'aimerais).",
      },
      {
        question: "How do you inform a client about the estimated fare in English?",
        options: [
          "The price is around fifty euros.",
          "You pay me fifty.",
          "Fifty euros, okay?",
          "Money is fifty.",
        ],
        correctIndex: 0,
        explanation:
          "'The price is around fifty euros' (le prix est d'environ cinquante euros) est la maniere professionnelle et correcte d'informer un client sur le tarif estime.",
      },
      {
        question: "A client says: 'Could you please turn down the air conditioning?' What should you do?",
        options: [
          "Ouvrir les fenetres",
          "Baisser la climatisation",
          "Augmenter la climatisation",
          "Eteindre la radio",
        ],
        correctIndex: 1,
        explanation:
          "'Turn down the air conditioning' signifie baisser la climatisation. 'Turn down' = reduire/baisser. Le client demande de reduire l'intensite de la climatisation.",
      },
      {
        question: "What is the correct English translation of 'Nous arriverons dans environ 20 minutes' ?",
        options: [
          "We will arrive in about 20 minutes.",
          "We arrived 20 minutes ago.",
          "We are 20 minutes late.",
          "We need 20 minutes to leave.",
        ],
        correctIndex: 0,
        explanation:
          "'We will arrive in about 20 minutes' est la traduction correcte. 'Will arrive' = arriverons (futur), 'in about' = dans environ, '20 minutes' = 20 minutes.",
      },
      {
        question: "How do you ask a client if they have a preferred route?",
        options: [
          "What road you want?",
          "Do you have a preferred route, or shall I take the fastest way?",
          "I go the way I want.",
          "Road is good or not?",
        ],
        correctIndex: 1,
        explanation:
          "'Do you have a preferred route, or shall I take the fastest way?' est la formulation polie et professionnelle. Elle laisse le choix au client tout en proposant une alternative.",
      },
      {
        question: "What does 'receipt' mean in the context of a VTC ride?",
        options: ["Reservation", "Reclamation", "Recu / facture", "Pourboire"],
        correctIndex: 2,
        explanation:
          "Un 'receipt' dans le contexte d'une course VTC signifie un recu ou une facture. C'est le document attestant du paiement de la course. 'Could I have a receipt, please?' = Puis-je avoir un recu ?",
      },
    ],
  },
  {
    slug: "developpement-commercial",
    title: "Developpement commercial",
    description: "Questions sur le marketing, la fidelisation client et le developpement de l'activite VTC",
    coefficient: 2,
    questions: [
      {
        question: "Quelle est la meilleure strategie pour fideliser un client VTC ?",
        options: [
          "Proposer uniquement les tarifs les plus bas",
          "Offrir un service de qualite constant, personnalise et ponctuel",
          "Envoyer des SMS publicitaires tous les jours",
          "Refuser les courses courtes",
        ],
        correctIndex: 1,
        explanation:
          "La fidelisation client repose avant tout sur la qualite de service : ponctualite, proprete du vehicule, accueil professionnel, conduite souple et attention aux preferences du client. Un service excellent incite le client a revenir.",
      },
      {
        question: "Quel est l'avantage principal de travailler avec une plateforme comme Uber ou Bolt ?",
        options: [
          "Aucun avantage, il faut eviter les plateformes",
          "L'acces a un large volume de clients potentiels",
          "La possibilite de fixer ses propres tarifs",
          "L'absence totale de commission",
        ],
        correctIndex: 1,
        explanation:
          "Le principal avantage des plateformes de mise en relation est l'acces a un volume important de clients. Elles permettent de demarrer rapidement son activite et d'obtenir des courses regulieres, meme sans clientele propre.",
      },
      {
        question: "Quel outil est essentiel pour developper sa propre clientele en tant que chauffeur VTC independant ?",
        options: [
          "Un fax professionnel",
          "Un site web et des cartes de visite professionnelles",
          "Une enseigne lumineuse sur le vehicule",
          "Un uniforme obligatoire",
        ],
        correctIndex: 1,
        explanation:
          "Un site web professionnel et des cartes de visite sont des outils essentiels pour developper sa clientele en direct. Le site permet d'etre trouve en ligne et les cartes de visite laissent une trace concrete apres chaque course.",
      },
      {
        question: "Quelle commission moyenne prelevent les plateformes VTC (Uber, Bolt) sur chaque course ?",
        options: [
          "5 a 10%",
          "20 a 25%",
          "40 a 50%",
          "Aucune commission",
        ],
        correctIndex: 1,
        explanation:
          "Les plateformes VTC prelevent generalement entre 20 et 25% de commission sur chaque course. C'est pourquoi developper sa clientele en direct est important pour ameliorer sa rentabilite.",
      },
      {
        question: "Qu'est-ce que le 'bouche a oreille' dans le contexte du developpement commercial VTC ?",
        options: [
          "Une technique de publicite payante",
          "La recommandation d'un service par des clients satisfaits a leur entourage",
          "Une methode de prospection telephonique",
          "Un reseau social professionnel",
        ],
        correctIndex: 1,
        explanation:
          "Le bouche a oreille est la recommandation spontanee d'un service par des clients satisfaits. C'est le canal d'acquisition le plus puissant et le moins couteux pour un chauffeur VTC. Un service excellent genere naturellement des recommandations.",
      },
      {
        question: "Quel type de clientele peut etre le plus rentable pour un chauffeur VTC ?",
        options: [
          "Les touristes occasionnels",
          "Les entreprises et cadres pour des trajets reguliers (hotels, aeroports, seminaires)",
          "Les etudiants",
          "Les courses de courte distance uniquement",
        ],
        correctIndex: 1,
        explanation:
          "La clientele d'affaires (entreprises, cadres, hotels de luxe) est generalement la plus rentable car elle genere des courses regulieres, souvent sur de plus longues distances, avec un potentiel de fidelisation eleve.",
      },
      {
        question: "Pourquoi est-il important de maintenir son vehicule en parfait etat de proprete ?",
        options: [
          "Pour eviter les amendes de la prefecture",
          "Parce que c'est un element cle de l'image professionnelle et de la satisfaction client",
          "Pour reduire les frais de carburant",
          "Pour passer le controle technique",
        ],
        correctIndex: 1,
        explanation:
          "La proprete du vehicule est un element essentiel de l'image professionnelle du chauffeur VTC. Un vehicule propre, interieur comme exterieur, rassure le client, renforce la confiance et contribue directement a la satisfaction et a la fidelisation.",
      },
      {
        question: "Quelle est la meilleure approche pour gerer un avis negatif en ligne ?",
        options: [
          "Ignorer completement l'avis",
          "Supprimer l'avis si possible",
          "Repondre de maniere professionnelle, s'excuser si necessaire et proposer une solution",
          "Repondre de maniere agressive pour se defendre",
        ],
        correctIndex: 2,
        explanation:
          "Face a un avis negatif, la reponse professionnelle est essentielle : reconnaitre le probleme, s'excuser si necessaire, et proposer une solution. Cela montre aux futurs clients que vous prenez leur satisfaction au serieux.",
      },
      {
        question: "Quel reseau social est le plus efficace pour un chauffeur VTC ciblant une clientele d'affaires ?",
        options: [
          "TikTok",
          "LinkedIn",
          "Snapchat",
          "Pinterest",
        ],
        correctIndex: 1,
        explanation:
          "LinkedIn est le reseau social professionnel par excellence. Il permet de se connecter avec des cadres, des entreprises et des assistantes de direction qui organisent les deplacements professionnels. C'est un canal pertinent pour la clientele d'affaires.",
      },
      {
        question: "Quel indicateur permet de mesurer la rentabilite de son activite VTC ?",
        options: [
          "Le nombre de courses effectuees uniquement",
          "Le chiffre d'affaires brut uniquement",
          "Le benefice net apres deduction de toutes les charges (carburant, assurance, commission, entretien)",
          "Le nombre d'heures travaillees",
        ],
        correctIndex: 2,
        explanation:
          "Le benefice net (chiffre d'affaires moins toutes les charges) est l'indicateur le plus pertinent de rentabilite. Il tient compte du carburant, des assurances, des commissions plateformes, de l'entretien, des charges sociales et fiscales.",
      },
    ],
  },
];
