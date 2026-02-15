export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
        <p className="text-gray-400 mb-8">Dernière mise à jour : 10 février 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              NinjaKana ("nous", "notre", "l'application") respecte votre vie privée.
              Cette politique explique quelles données nous collectons et comment nous les utilisons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Données collectées</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              NinjaKana collecte uniquement les données nécessaires au fonctionnement de l'application :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Progression d'apprentissage (stockée localement sur votre appareil)</li>
              <li>Préférences de l'application (stockées localement)</li>
              <li>Données d'utilisation anonymes via les services d'analyse des stores (Apple/Google)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Données non collectées</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous ne collectons pas :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Informations personnelles identifiables (nom, email, téléphone)</li>
              <li>Données de localisation</li>
              <li>Contacts ou photos</li>
              <li>Données de paiement (gérées par Apple/Google)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Stockage des données</h2>
            <p className="text-gray-300 leading-relaxed">
              Toutes vos données de progression sont stockées localement sur votre appareil.
              Nous n'avons pas accès à ces données et ne les transférons pas vers des serveurs externes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Publicités</h2>
            <p className="text-gray-300 leading-relaxed">
              L'application peut afficher des publicités via Google AdMob.
              Ces publicités peuvent utiliser des identifiants publicitaires pour afficher
              des annonces pertinentes. Vous pouvez désactiver la personnalisation des
              publicités dans les paramètres de votre appareil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Services tiers</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              L'application utilise les services suivants :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Google AdMob (publicités)</li>
              <li>RevenueCat (gestion des achats in-app)</li>
              <li>Expo (infrastructure technique)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
            <p className="text-gray-300 leading-relaxed">
              Vous pouvez supprimer toutes vos données en désinstallant l'application.
              Pour toute question concernant vos données, contactez-nous.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Pour toute question relative à cette politique de confidentialité :<br />
              <a href="mailto:contact@ninjakana.app" className="text-indigo-400 hover:text-indigo-300">
                contact@ninjakana.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              Nous pouvons mettre à jour cette politique. Les modifications seront
              publiées sur cette page avec une nouvelle date de mise à jour.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <a href="/" className="text-indigo-400 hover:text-indigo-300">
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
