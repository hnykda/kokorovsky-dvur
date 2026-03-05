export default function Footer() {
  return (
    <footer className="bg-text-dark text-white/60 py-10 px-5">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-white font-bold text-lg mb-1">
          Kokořovský dvůr
        </p>
        <p className="font-sans text-sm mb-6">Žlutice · Karlovarský kraj</p>
        <div className="w-12 h-px bg-accent/40 mx-auto mb-6" />
        <p className="font-sans text-xs text-white/35">
          © {new Date().getFullYear()} Spolek Žlutický zámek, z.s. — IČO
          22098372
        </p>
      </div>
    </footer>
  );
}
