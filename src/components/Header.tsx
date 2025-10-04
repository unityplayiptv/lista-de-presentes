import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#ca8f93] to-background">
      <div className="container mx-auto px-4 py-3">
        
        <div className="grid grid-cols-[auto,1fr,auto] items-center">
          <div className="flex items-center justify-self-start">
            <img 
              src={logo} 
              alt="Logo da Loja" 
              className="h-12 w-auto"
            />
          </div>
          <div className="flex justify-center">
            <span className="whitespace-nowrap text-2xl md:text-3xl font-bold text-foreground">
              Lista de Presentes - Nicolas e Brenda
            </span>
          </div>
          <div className="justify-self-end"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
