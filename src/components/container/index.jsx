const Container = ({ children, title, isWraper }) => {
    return (
        <main
            className="w-full max-w-[90%] mx-auto flex flex-wrap items-center justify-center py-10"
        >
            {
                title
                &&
                (
                    <div className="w-full font-bold pb-20">
                        <h2 className="text-3xl text-[var(--white)] text-center">{title}</h2>
                    </div>
                )
            }
            {
                isWraper
                    ?
                    (
                        <section className="w-full min-h-[80vh] grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                            {children}
                        </section>
                    )
                    :
                    (
                        <section className="w-full flex items-center justify-center pb-20">
                            {
                                children
                            }
                        </section>
                    )
            }
        </main>
    )
};

export default Container; 