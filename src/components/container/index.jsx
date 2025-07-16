const Container = ({ children, title, isWraper }) => {
    return (
        <main className="w-full max-w-[90%] mx-auto flex flex-wrap items-center justify-center py-10">
            {title && (
                <div className="w-full font-bold pb-20">
                    <h2 className="text-3xl text-[var(--white)] text-center">{title}</h2>
                </div>
            )}
            {isWraper ? (
                <section className="w-full min-h-[80vh] flex items-center justify-center pb-10">
                    <div className=" w-full flex flex-wrap gap-10 justify-items-center justify-center">
                        {children}
                    </div>
                </section>
            ) : (
                <section className="w-full flex flex-col items-center justify-center pb-10">
                    {children}
                </section>
            )}
        </main>
    );
};

export default Container;