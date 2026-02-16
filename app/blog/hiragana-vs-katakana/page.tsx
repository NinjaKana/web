import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hiragana vs Katakana : lequel apprendre en premier ? | NinjaKana",
  description: "Comprends la différence entre hiragana et katakana. Découvre quand utiliser chaque alphabet japonais et par lequel commencer pour progresser vite.",
  keywords: [
    "hiragana vs katakana",
    "différence hiragana katakana",
    "alphabet japonais",
    "apprendre japonais",
    "hiragana ou katakana",
    "écriture japonaise",
  ],
  alternates: {
    canonical: '/blog/hiragana-vs-katakana',
  },
  openGraph: {
    title: "Hiragana vs Katakana : lequel apprendre en premier ?",
    description: "Comprends la différence entre les deux alphabets japonais et découvre par lequel commencer.",
    type: "article",
    publishedTime: "2026-02-16",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hiragana vs Katakana : lequel apprendre en premier ?",
  description: "Comprends la différence entre les deux alphabets japonais et découvre par lequel commencer.",
  datePublished: "2026-02-16",
  author: {
    "@type": "Organization",
    name: "NinjaKana",
  },
};

const comparisonData = [
  { hiragana: "あ", katakana: "ア", romaji: "a" },
  { hiragana: "い", katakana: "イ", romaji: "i" },
  { hiragana: "う", katakana: "ウ", romaji: "u" },
  { hiragana: "え", katakana: "エ", romaji: "e" },
  { hiragana: "お", katakana: "オ", romaji: "o" },
  { hiragana: "か", katakana: "カ", romaji: "ka" },
  { hiragana: "き", katakana: "キ", romaji: "ki" },
  { hiragana: "く", katakana: "ク", romaji: "ku" },
  { hiragana: "け", katakana: "ケ", romaji: "ke" },
  { hiragana: "こ", katakana: "コ", romaji: "ko" },
];

export default function ArticleHiraganaVsKatakana() {
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
              <span>Hiragana vs Katakana</span>
            </div>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Hiragana vs Katakana : lequel apprendre en premier ?
              </h1>
              <div className="flex items-center gap-4 text-gray-400">
                <span>16 février 2026</span>
                <span>•</span>
                <span>7 min de lecture</span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 mb-8">
                Tu commences le japonais et tu te demandes : hiragana ou katakana d'abord ? C'est LA question que tout débutant se pose. Voici la réponse claire, avec les raisons.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Les 3 systèmes d'écriture japonais</h2>

              <p className="text-gray-300 mb-4">
                Avant de comparer, comprends que le japonais utilise <strong className="text-white">trois</strong> systèmes d'écriture simultanément :
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-4xl mb-4">あ</div>
                  <h3 className="font-semibold text-white mb-2">Hiragana</h3>
                  <p className="text-gray-400 text-sm m-0">46 caractères. Mots japonais natifs, grammaire.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-4xl mb-4">ア</div>
                  <h3 className="font-semibold text-white mb-2">Katakana</h3>
                  <p className="text-gray-400 text-sm m-0">46 caractères. Mots étrangers, onomatopées.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="text-4xl mb-4">日</div>
                  <h3 className="font-semibold text-white mb-2">Kanji</h3>
                  <p className="text-gray-400 text-sm m-0">~2000 caractères. Concepts, noms, verbes.</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8">
                Une phrase japonaise typique mélange les trois. Par exemple : <span className="text-xl">私はコーヒーを飲みます</span> (Je bois du café) contient des kanji (私, 飲), des hiragana (は, を, みます) et des katakana (コーヒー).
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Hiragana : les fondations</h2>

              <p className="text-gray-300 mb-4">
                Les <strong className="text-white">hiragana</strong> (ひらがな) sont tes fondations. Voici pourquoi :
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                <li><strong className="text-white">Grammaire</strong> : Toutes les particules grammaticales sont en hiragana (は, が, を, に, で...)</li>
                <li><strong className="text-white">Conjugaisons</strong> : Les terminaisons des verbes et adjectifs sont en hiragana</li>
                <li><strong className="text-white">Furigana</strong> : Les petits caractères au-dessus des kanji difficiles sont en hiragana</li>
                <li><strong className="text-white">Mots natifs</strong> : Les mots japonais d'origine (pas les emprunts) s'écrivent en hiragana</li>
              </ul>

              <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-white mb-3">Exemples de mots en hiragana :</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <span className="text-2xl">ありがとう</span>
                    <p className="text-gray-400 text-sm mt-1">arigatou (merci)</p>
                  </div>
                  <div>
                    <span className="text-2xl">おはよう</span>
                    <p className="text-gray-400 text-sm mt-1">ohayou (bonjour)</p>
                  </div>
                  <div>
                    <span className="text-2xl">たべる</span>
                    <p className="text-gray-400 text-sm mt-1">taberu (manger)</p>
                  </div>
                  <div>
                    <span className="text-2xl">きれい</span>
                    <p className="text-gray-400 text-sm mt-1">kirei (joli)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Katakana : les mots étrangers</h2>

              <p className="text-gray-300 mb-4">
                Les <strong className="text-white">katakana</strong> (カタカナ) ont un rôle différent :
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                <li><strong className="text-white">Mots étrangers</strong> : Tous les emprunts aux autres langues (anglais surtout)</li>
                <li><strong className="text-white">Noms propres étrangers</strong> : Ton prénom s'écrit en katakana</li>
                <li><strong className="text-white">Onomatopées</strong> : Les sons (ドキドキ = battement de cœur)</li>
                <li><strong className="text-white">Emphase</strong> : Comme les MAJUSCULES en français</li>
                <li><strong className="text-white">Termes scientifiques</strong> : Noms d'animaux, plantes, termes techniques</li>
              </ul>

              <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-white mb-3">Exemples de mots en katakana :</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <span className="text-2xl">コーヒー</span>
                    <p className="text-gray-400 text-sm mt-1">koohii (café)</p>
                  </div>
                  <div>
                    <span className="text-2xl">テレビ</span>
                    <p className="text-gray-400 text-sm mt-1">terebi (TV)</p>
                  </div>
                  <div>
                    <span className="text-2xl">パソコン</span>
                    <p className="text-gray-400 text-sm mt-1">pasokon (PC)</p>
                  </div>
                  <div>
                    <span className="text-2xl">フランス</span>
                    <p className="text-gray-400 text-sm mt-1">furansu (France)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Comparaison côte à côte</h2>

              <p className="text-gray-300 mb-6">
                Hiragana et katakana représentent <strong className="text-white">les mêmes sons</strong>. Chaque hiragana a son équivalent katakana :
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="p-3 text-gray-400">Romaji</th>
                      <th className="p-3 text-gray-400">Hiragana</th>
                      <th className="p-3 text-gray-400">Katakana</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row) => (
                      <tr key={row.romaji} className="border-b border-gray-800">
                        <td className="p-3 text-gray-400">{row.romaji}</td>
                        <td className="p-3 text-2xl">{row.hiragana}</td>
                        <td className="p-3 text-2xl">{row.katakana}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-300 mb-8">
                Tu remarques que les formes sont différentes mais les sons identiques. Les hiragana sont plus "arrondis", les katakana plus "anguleux".
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">La réponse : commence par les hiragana</h2>

              <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-6 mb-8">
                <p className="text-indigo-200 text-lg m-0">
                  <strong>Verdict :</strong> Apprends les hiragana en premier. Sans exception.
                </p>
              </div>

              <p className="text-gray-300 mb-4">
                Voici pourquoi :
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-white">Fréquence d'utilisation</h4>
                    <p className="text-gray-400 m-0">Les hiragana apparaissent dans 100% des phrases japonaises. Les katakana dans ~10-20%.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-white">Compréhension grammaticale</h4>
                    <p className="text-gray-400 m-0">Sans hiragana, tu ne peux pas comprendre la structure des phrases.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-white">Aide à la lecture</h4>
                    <p className="text-gray-400 m-0">Les furigana (guides de prononciation) sont en hiragana. Tu en as besoin pour lire les kanji.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-white">Transition plus facile</h4>
                    <p className="text-gray-400 m-0">Après les hiragana, les katakana s'apprennent 2x plus vite car tu connais déjà les sons.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Le planning optimal</h2>

              <p className="text-gray-300 mb-4">
                Voici l'ordre recommandé pour un débutant :
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-indigo-400 font-bold">Semaine 1-2</span>
                  </div>
                  <h4 className="font-semibold text-white">Les 46 hiragana</h4>
                  <p className="text-gray-400 m-0">15-20 min/jour. C'est ta priorité absolue.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-indigo-400 font-bold">Semaine 3-4</span>
                  </div>
                  <h4 className="font-semibold text-white">Les 46 katakana</h4>
                  <p className="text-gray-400 m-0">Plus rapide car tu connais les sons. Continue à réviser les hiragana.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-indigo-400 font-bold">Mois 2+</span>
                  </div>
                  <h4 className="font-semibold text-white">Les kanji de base (JLPT N5)</h4>
                  <p className="text-gray-400 m-0">100 kanji essentiels. Tu lis les furigana grâce aux hiragana.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">L'erreur classique à éviter</h2>

              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 mb-8">
                <p className="text-red-200 m-0">
                  <strong>Ne fais pas ça :</strong> Apprendre hiragana ET katakana en même temps. Ton cerveau va confondre les caractères similaires. Maîtrise d'abord un système avant de passer à l'autre.
                </p>
              </div>

              <p className="text-gray-300 mb-8">
                Certains caractères se ressemblent entre les deux systèmes (う/ウ, か/カ, き/キ). En les apprenant simultanément, tu crées de la confusion inutile.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-white">Résumé</h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="p-4 text-left text-gray-400"></th>
                      <th className="p-4 text-center text-gray-400">Hiragana</th>
                      <th className="p-4 text-center text-gray-400">Katakana</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="p-4 text-gray-300">Nombre de caractères</td>
                      <td className="p-4 text-center">46</td>
                      <td className="p-4 text-center">46</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4 text-gray-300">Utilisation</td>
                      <td className="p-4 text-center">Mots natifs, grammaire</td>
                      <td className="p-4 text-center">Mots étrangers</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4 text-gray-300">Fréquence</td>
                      <td className="p-4 text-center text-green-400">Très élevée</td>
                      <td className="p-4 text-center text-yellow-400">Moyenne</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4 text-gray-300">Apprendre en premier ?</td>
                      <td className="p-4 text-center text-green-400">Oui</td>
                      <td className="p-4 text-center text-gray-400">Non</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="p-4 text-gray-300">Temps d'apprentissage</td>
                      <td className="p-4 text-center">7-14 jours</td>
                      <td className="p-4 text-center">5-10 jours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Teste ton niveau</h3>
                <p className="text-gray-300 mb-6">
                  Tu connais déjà quelques kana ? Fais notre quiz gratuit pour évaluer ton niveau actuel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#quiz"
                    className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-500 transition-all"
                  >
                    Faire le quiz gratuit
                  </Link>
                  <Link
                    href="/blog/apprendre-hiragana-7-jours"
                    className="px-8 py-4 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition-all"
                  >
                    Guide hiragana 7 jours
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
