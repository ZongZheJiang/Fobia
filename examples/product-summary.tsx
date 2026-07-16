function ProductSummary() {
    return (
        <div className="flex flex-col gap-16 items-center mx-[10%]">
            <h2
            className="text-2xl md:text-4xl font-bold mr-[10%] my-8"
            >
                Fobia provides free decentralised computing power to empower communities of builders and coders.
            </h2>
            <div className="container w-full flex flex-col md:flex-row justify-between items-center gap-8">
                <h2 className="text-md md:text-xl w-full md:w-[35%]">A variety of AI Applications, available at your fingertips.</h2>
                <div className="rounded-xl bg-muted w-full md:w-128 h-auto">
                    <video autoPlay muted loop className="rounded-xl h-auto w-full">
                        <source src="/fobia_demo_full.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
                <h2 className="text-md md:text-xl w-full md:w-[35%]">Get early access to cutting-edge AI technology, even for non-technical users.</h2>
                <div className="rounded-xl bg-muted w-full md:w-128 h-auto">
                    <video autoPlay muted loop className="rounded-xl h-auto w-full">
                        <source src="/fobia_voicebox_demo.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default ProductSummary