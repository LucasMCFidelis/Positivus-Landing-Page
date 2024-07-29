export function HeaderRoot(){
    return (
        <header className="w-full h-auto flex justify-between items-center mt-7 sm:mt-14">
            <img 
                src="/public/assets/logo.svg" 
                alt="" 
                className="w-36 md:w-56"    
            />
            <nav className="space-x-10 hidden text-xl xl:block">
                <a>About Us</a>
                <a>Services</a>
                <a>Use Cases</a>
                <a>Pricing</a>
                <a>Blog</a>
                <a>Request a quotes</a>
            </nav>
        </header>
    )
}