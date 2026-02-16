import Quiz from "@/components/Quiz";

const FAQ_ITEMS = [
  {
    q: "Combien de temps faut-il pour apprendre les hiragana ?",
    a: "Avec NinjaKana, tu peux maîtriser les 46 hiragana en 7 à 10 jours à raison de 15-20 minutes par jour. La répétition espacée optimise ta mémorisation.",
  },
  {
    q: "Dois-je apprendre hiragana ou katakana en premier ?",
    a: "Commence par les hiragana. Ils sont plus courants et utilisés pour les mots japonais natifs. Les katakana (mots étrangers) viennent ensuite naturellement.",
  },
  {
    q: "L'app fonctionne-t-elle hors ligne ?",
    a: "Oui ! Une fois téléchargée, tu peux apprendre sans connexion internet. Parfait pour le métro ou les voyages.",
  },
  {
    q: "C'est vraiment gratuit ?",
    a: "Oui, tu peux apprendre tous les kana gratuitement. Le premium débloque les kanji, supprime les pubs et offre des fonctionnalités avancées.",
  },
  {
    q: "Quelle est la différence avec Duolingo ?",
    a: "NinjaKana est spécialisé dans l'apprentissage des kana et kanji. Pas de distraction, pas de grammaire complexe. Juste ce qu'il faut pour lire le japonais.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const features = [
  {
    icon: "🎯",
    title: "92 caractères",
    description: "46 hiragana + 46 katakana. Tout ce qu'il faut pour lire le japonais.",
  },
  {
    icon: "🧠",
    title: "Répétition espacée",
    description: "L'algorithme SRS optimise tes révisions pour une mémorisation durable.",
  },
  {
    icon: "🔊",
    title: "250 fichiers audio",
    description: "Prononciation native pour chaque caractère. Entraîne ton oreille.",
  },
  {
    icon: "📈",
    title: "Progression visible",
    description: "Suis tes progrès en temps réel. Objectif : 30 jours pour tout maîtriser.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-indigo-400">Ninja</span>Kana
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
              Blog
            </a>
            <a href="#quiz" className="text-gray-400 hover:text-white transition-colors">
              Quiz
            </a>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">
              Fonctionnalités
            </a>
            <a href="#download" className="text-gray-400 hover:text-white transition-colors">
              Télécharger
            </a>
          </nav>
          <a
            href="#quiz"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-500 transition-all"
          >
            Tester mon niveau
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium mb-6">
            L'app pour apprendre les kana japonais
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Maîtrise les kana
            <br />
            <span className="text-indigo-400">en 30 jours</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Hiragana, Katakana, prononciation. Tout ce qu'il faut pour lire le japonais,
            sans distraction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quiz"
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold text-lg hover:bg-indigo-500 transition-all hover:scale-105"
            >
              Tester mon niveau
            </a>
            <a
              href="#download"
              className="px-8 py-4 bg-gray-800 text-white rounded-xl font-semibold text-lg hover:bg-gray-700 transition-all"
            >
              Télécharger l'app
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-y border-gray-800 bg-gray-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-400">2.3K+</div>
              <div className="text-sm text-gray-400">Apprenants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400">4.8★</div>
              <div className="text-sm text-gray-400">Note moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400">92</div>
              <div className="text-sm text-gray-400">Caractères</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400">30j</div>
              <div className="text-sm text-gray-400">Pour maîtriser</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tu connais combien de kana ?
            </h2>
            <p className="text-gray-400">
              Fais le quiz et découvre ton niveau en moins de 2 minutes.
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi NinjaKana ?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Une app conçue pour t'amener de zéro à la maîtrise des kana,
              sans te perdre dans des fonctionnalités inutiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Apprends</h3>
              <p className="text-gray-400">
                Découvre chaque caractère avec sa prononciation et des exemples.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Pratique</h3>
              <p className="text-gray-400">
                Quiz interactifs et exercices pour ancrer ta mémoire.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Maîtrise</h3>
              <p className="text-gray-400">
                La répétition espacée t'assure de ne jamais oublier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.q}
                className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-6 bg-gradient-to-b from-indigo-900/20 to-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Télécharge NinjaKana gratuitement et commence ton apprentissage aujourd'hui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/id6757958764"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">Télécharger sur</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.apprendre.japonais"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">Disponible sur</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">
              <span className="text-indigo-400">Ninja</span>Kana
            </div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="/blog" className="hover:text-white transition-colors">
                Blog
              </a>
              <a href="/legal" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="mailto:contact@ninjakana.app" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 NinjaKana. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
