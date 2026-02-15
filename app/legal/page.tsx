export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
        <p className="text-gray-400 mb-8">Dernière mise à jour : 10 février 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Éditeur</h2>
            <p className="text-gray-300 leading-relaxed">
              L'application NinjaKana est éditée par :<br /><br />
              Salomon Dosso<br />
              Entrepreneur individuel<br />
              Suisse
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Email :{" "}
              <a href="mailto:contact@ninjakana.app" className="text-indigo-400 hover:text-indigo-300">
                contact@ninjakana.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <p className="text-gray-300 leading-relaxed">
              Ce site est hébergé par :<br /><br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-300 leading-relaxed">
              L'ensemble du contenu de l'application NinjaKana et de ce site
              (textes, images, logo, code) est la propriété exclusive de
              Salomon Dosso, sauf mention contraire.
              Toute reproduction, distribution ou utilisation sans autorisation
              préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Données personnelles</h2>
            <p className="text-gray-300 leading-relaxed">
              Pour toute information concernant le traitement de vos données
              personnelles, veuillez consulter notre{" "}
              <a href="/privacy" className="text-indigo-400 hover:text-indigo-300">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation de responsabilité</h2>
            <p className="text-gray-300 leading-relaxed">
              L'application NinjaKana est fournie "en l'état".
              Nous ne garantissons pas que l'application sera exempte d'erreurs
              ou d'interruptions. L'utilisation de l'application se fait sous
              votre propre responsabilité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Droit applicable</h2>
            <p className="text-gray-300 leading-relaxed">
              Les présentes mentions légales sont régies par le droit suisse.
              Tout litige relatif à l'utilisation de l'application sera soumis
              aux tribunaux compétents en Suisse.
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
