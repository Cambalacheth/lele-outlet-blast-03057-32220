const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <a 
          href="https://mystockmania.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-soft hover:shadow-strong transition-all hover:scale-105">
            Ver más
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
