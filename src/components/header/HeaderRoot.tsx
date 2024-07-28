export function HeaderRoot(){
    return (
        <header className="w-full h-auto flex justify-between items-center mt-7 sm:mt-14">
            <img 
                src="/public/assets/logo.svg" 
                alt="" 
                className="w-36 md:w-56"    
            />
            <div className="space-x-10 hidden lg:block">
                <button>About Us</button>
                <button>Services</button>
                <button>Use Cases</button>
                <button>Pricing</button>
                <button>Blog</button>
                <button>Request a quotes</button>
            </div>
        </header>
    )
}