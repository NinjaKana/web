import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - NinjaKana | Apprendre le japonais",
  description: "Guides et conseils pour apprendre les hiragana, katakana et kanji japonais. Méthodes efficaces et astuces pour progresser rapidement.",
  alternates: {
    canonical: '/blog',
  },
};

const articles = [
  {
    slug: "apprendre-hiragana-7-jours",
    title: "Apprendre les hiragana en 7 jours : la méthode complète",
    description: "Un planning jour par jour pour maîtriser les 46 caractères hiragana. Avec la répétition espacée, tu n'oublieras plus jamais.",
    date: "16 février 2026",
    readTime: "10 min",
  },
  {
    slug: "hiragana-vs-katakana",
    title: "Hiragana vs Katakana : lequel apprendre en premier ?",
    description: "Comprends la différence entre les deux alphabets japonais et découvre par lequel commencer pour progresser efficacement.",
    date: "16 février 2026",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-indigo-400">Ninja</span>Kana
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/blog" className="text-white font-medium">
              Blog
            </Link>
            <Link href="/#quiz" className="text-gray-400 hover:text-white transition-colors">
              Quiz
            </Link>
            <Link href="/#download" className="text-gray-400 hover:text-white transition-colors">
              Télécharger
            </Link>
          </nav>
          <Link
            href="/#quiz"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-500 transition-all"
          >
            Tester mon niveau
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-400">
            Guides et conseils pour apprendre le japonais efficacement.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all"
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} de lecture</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-400">
                  {article.title}
                </h2>
                <p className="text-gray-400">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-gray-400 mb-8">
            Teste ton niveau de kana gratuitement avec notre quiz interactif.
          </p>
          <Link
            href="/#quiz"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-500 transition-all"
          >
            Faire le quiz
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-indigo-400">Ninja</span>Kana
            </Link>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/legal" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2026 NinjaKana. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
