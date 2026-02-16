import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apprendre les hiragana en 7 jours : la méthode complète | NinjaKana",
  description: "Planning jour par jour pour maîtriser les 46 caractères hiragana. Technique de répétition espacée, tableaux complets et erreurs à éviter.",
  keywords: [
    "apprendre hiragana",
    "hiragana en 7 jours",
    "alphabet japonais",
    "apprendre japonais débutant",
    "hiragana tableau",
    "mémoriser hiragana",
  ],
  alternates: {
    canonical: '/blog/apprendre-hiragana-7-jours',
  },
  openGraph: {
    title: "Apprendre les hiragana en 7 jours : la méthode complète",
    description: "Planning jour par jour pour maîtriser les 46 caractères hiragana avec la répétition espacée.",
    type: "article",
    publishedTime: "2026-02-16",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Apprendre les hiragana en 7 jours : la méthode complète",
  description: "Planning jour par jour pour maîtriser les 46 caractères hiragana avec la répétition espacée.",
  datePublished: "2026-02-16",
  author: {
    "@type": "Organization",
    name: "NinjaKana",
  },
};

const hiraganaTable = [
  { romaji: "", vowels: ["a", "i", "u", "e", "o"], chars: ["あ", "い", "う", "え", "お"] },
  { romaji: "k", vowels: ["ka", "ki", "ku", "ke", "ko"], chars: ["か", "き", "く", "け", "こ"] },
  { romaji: "s", vowels: ["sa", "shi", "su", "se", "so"], chars: ["さ", "し", "す", "せ", "そ"] },
  { romaji: "t", vowels: ["ta", "chi", "tsu", "te", "to"], chars: ["た", "ち", "つ", "て", "と"] },
  { romaji: "n", vowels: ["na", "ni", "nu", "ne", "no"], chars: ["な", "に", "ぬ", "ね", "の"] },
  { romaji: "h", vowels: ["ha", "hi", "fu", "he", "ho"], chars: ["は", "ひ", "ふ", "へ", "ほ"] },
  { romaji: "m", vowels: ["ma", "mi", "mu", "me", "mo"], chars: ["ま", "み", "む", "め", "も"] },
  { romaji: "y", vowels: ["ya", "", "yu", "", "yo"], chars: ["や", "", "ゆ", "", "よ"] },
  { romaji: "r", vowels: ["ra", "ri", "ru", "re", "ro"], chars: ["ら", "り", "る", "れ", "ろ"] },
  { romaji: "w", vowels: ["wa", "", "", "", "wo"], chars: ["わ", "", "", "", "を"] },
  { romaji: "n", vowels: ["n", "", "", "", ""], chars: ["ん", "", "", "", ""] },
];

export default function ArticleHiragana7Jours() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="min-h-screen bg-gray-950 text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-indigo-400">Ninja</span>Kana
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/#quiz" className="text-gray-400 hover:text-white transition-colors">
                Quiz
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

        {/* Article */}
        <article className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/blog" className="hover:text-indigo-400">Blog</Link>
              <span>/</span>
              <span>Apprendre les hiragana</span>
            </div>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Apprendre les hiragana en 7 jours : la méthode complète
              </h1>
              <div className="flex items-center gap-4 text-gray-400">
                <span>16 février 2026</span>
                <span>•</span>
                <span>10 min de lecture</span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 mb-8">
                Tu veux apprendre le japonais ? Les hiragana sont ta première étape. Ces 46 caractères te permettront de lire la majorité des mots japonais. Voici un planning concret pour les maîtriser en une semaine.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Pourquoi commencer par les hiragana ?</h2>

              <p className="text-gray-300 mb-4">
                Le japonais utilise trois systèmes d'écriture : les <strong className="text-white">hiragana</strong>, les <strong className="text-white">katakana</strong> et les <strong className="text-white">kanji</strong>. Les hiragana sont fondamentaux car :
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
                <li>Ils représentent tous les sons de la langue japonaise</li>
                <li>Ils sont utilisés pour les mots japonais natifs</li>
                <li>Ils servent de "guide de prononciation" au-dessus des kanji difficiles (furigana)</li>
                <li>Tu les verras partout : panneaux, menus, livres pour enfants</li>
              </ul>

              <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-6 mb-8">
                <p className="text-indigo-200 m-0">
                  <strong>Bonne nouvelle :</strong> Contrairement aux kanji (plusieurs milliers), il n'y a que 46 hiragana de base. Avec 15-20 minutes par jour, tu peux les maîtriser en une semaine.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Le tableau complet des 46 hiragana</h2>

              <p className="text-gray-300 mb-6">
                Avant de commencer, voici tous les hiragana que tu vas apprendre. Ne t'inquiète pas, on va les diviser en groupes faciles à digérer.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="p-3 text-gray-400"></th>
                      <th className="p-3 text-gray-400">a</th>
                      <th className="p-3 text-gray-400">i</th>
                      <th className="p-3 text-gray-400">u</th>
                      <th className="p-3 text-gray-400">e</th>
                      <th className="p-3 text-gray-400">o</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hiraganaTable.map((row, i) => (
                      <tr key={i} className="border-b border-gray-800">
                        <td className="p-3 text-gray-400">{row.romaji}</td>
                        {row.chars.map((char, j) => (
                          <td key={j} className="p-3">
                            {char && (
                              <div>
                                <span className="text-2xl">{char}</span>
                                <br />
                                <span className="text-xs text-gray-500">{row.vowels[j]}</span>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Le planning jour par jour</h2>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-400">Jour 1-2 : Les voyelles (5 caractères)</h3>

              <p className="text-gray-300 mb-4">
                Commence par les 5 voyelles. Elles sont la base de tout :
              </p>

              <div className="grid grid-cols-5 gap-4 mb-6">
                {["あ a", "い i", "う u", "え e", "お o"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mb-4">
                <strong className="text-white">Technique :</strong> Trace chaque caractère 10 fois en prononçant le son à voix haute. La mémoire musculaire + auditive accélère l'apprentissage.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-400">Jour 3 : Les consonnes K et S (10 caractères)</h3>

              <div className="grid grid-cols-5 gap-4 mb-4">
                {["か ka", "き ki", "く ku", "け ke", "こ ko"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-4 mb-6">
                {["さ sa", "し shi", "す su", "せ se", "そ so"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-xl p-6 mb-8">
                <p className="text-yellow-200 m-0">
                  <strong>Attention :</strong> し se prononce "shi", pas "si". C'est une exception importante à retenir.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-400">Jour 4 : Les consonnes T et N (10 caractères)</h3>

              <div className="grid grid-cols-5 gap-4 mb-4">
                {["た ta", "ち chi", "つ tsu", "て te", "と to"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-4 mb-6">
                {["な na", "に ni", "ぬ nu", "ね ne", "の no"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mb-4">
                <strong className="text-white">Exceptions :</strong> ち se prononce "chi" (pas "ti") et つ se prononce "tsu" (pas "tu"). Ces deux-là sont souvent confondus par les débutants.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-400">Jour 5 : Les consonnes H et M (10 caractères)</h3>

              <div className="grid grid-cols-5 gap-4 mb-4">
                {["は ha", "ひ hi", "ふ fu", "へ he", "ほ ho"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-4 mb-6">
                {["ま ma", "み mi", "む mu", "め me", "も mo"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mb-4">
                <strong className="text-white">Note :</strong> ふ se prononce "fu" (entre le "f" et le "h" français). C'est un son unique au japonais.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-400">Jour 6 : Les consonnes Y, R et W (8 caractères)</h3>

              <div className="grid grid-cols-3 gap-4 mb-4">
                {["や ya", "ゆ yu", "よ yo"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-4 mb-4">
                {["ら ra", "り ri", "る ru", "れ re", "ろ ro"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 max-w-xs">
                {["わ wa", "を wo"].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-xl p-4 text-center">
                    <span className="text-3xl block mb-2">{item.split(" ")[0]}</span>
                    <span className="text-gray-400 text-sm">{item.split(" ")[1]}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mb-4">
                <strong className="text-white">Le "R" japonais :</strong> Il se prononce entre le "r" et le "l". Ta langue touche brièvement le palais, comme un "d" léger. C'est le son le plus difficile pour les francophones.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-indigo-400">Jour 7 : Le N final + révision complète</h3>

              <div className="max-w-[80px] mb-6">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <span className="text-3xl block mb-2">ん</span>
                  <span className="text-gray-400 text-sm">n</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                ん est spécial : c'est le seul hiragana qui ne contient pas de voyelle. Il se prononce "n" et apparaît souvent à la fin des mots (comme dans "ramen" ラーメン).
              </p>

              <p className="text-gray-300 mb-8">
                Consacre le reste de la journée à réviser tous les caractères. Mélange-les, teste-toi, écris des mots simples.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">La technique qui change tout : la répétition espacée</h2>

              <p className="text-gray-300 mb-4">
                Apprendre les hiragana une fois ne suffit pas. Tu vas les oublier. C'est normal, c'est comme ça que fonctionne la mémoire humaine.
              </p>

              <p className="text-gray-300 mb-4">
                La <strong className="text-white">répétition espacée (SRS)</strong> résout ce problème. Le principe :
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
                <li>Tu revois un caractère juste avant de l'oublier</li>
                <li>Chaque révision réussie augmente l'intervalle</li>
                <li>Un caractère facile : tu le revois dans 1 semaine</li>
                <li>Un caractère difficile : tu le revois demain</li>
              </ul>

              <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-6 mb-8">
                <p className="text-indigo-200 m-0">
                  <strong>C'est exactement ce que fait NinjaKana.</strong> L'app utilise l'algorithme SM-2 pour calculer le moment optimal de chaque révision. Tu n'as pas à te soucier de quand réviser quoi.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">5 erreurs courantes à éviter</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">1. Apprendre sans écrire</h4>
                  <p className="text-gray-400 m-0">Regarder les caractères ne suffit pas. Écris-les à la main, même sur ton téléphone. La mémoire musculaire accélère l'apprentissage.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">2. Vouloir tout apprendre en un jour</h4>
                  <p className="text-gray-400 m-0">Ton cerveau a besoin de temps pour consolider. 20 minutes par jour battent 2 heures une fois par semaine.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">3. Ignorer la prononciation</h4>
                  <p className="text-gray-400 m-0">Écoute les sons natifs. Les exceptions (shi, chi, tsu, fu) sont cruciales pour être compris.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">4. Ne pas réviser</h4>
                  <p className="text-gray-400 m-0">Sans révision, tu oublieras 80% en une semaine. La répétition espacée est non-négociable.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">5. Sauter les caractères "difficiles"</h4>
                  <p className="text-gray-400 m-0">Les caractères qui se ressemblent (あ/お, は/ほ, わ/れ) méritent plus d'attention, pas moins.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Et après les hiragana ?</h2>

              <p className="text-gray-300 mb-4">
                Une fois les hiragana maîtrisés, tu as deux options :
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-8">
                <li><strong className="text-white">Katakana</strong> : Les 46 caractères pour les mots étrangers. Même structure, formes différentes.</li>
                <li><strong className="text-white">Kanji de base</strong> : Les 100 kanji du JLPT N5 pour commencer à lire de vrais textes.</li>
              </ul>

              <p className="text-gray-300 mb-8">
                La bonne nouvelle : avec les hiragana, tu as déjà la prononciation. Les katakana et kanji s'appuient sur cette base.
              </p>

              {/* CTA */}
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Prêt à commencer ?</h3>
                <p className="text-gray-300 mb-6">
                  Teste ton niveau actuel avec notre quiz gratuit, puis télécharge l'app pour suivre ta progression.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#quiz"
                    className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-500 transition-all"
                  >
                    Faire le quiz gratuit
                  </Link>
                  <Link
                    href="/#download"
                    className="px-8 py-4 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition-all"
                  >
                    Télécharger l'app
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

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
    </>
  );
}
