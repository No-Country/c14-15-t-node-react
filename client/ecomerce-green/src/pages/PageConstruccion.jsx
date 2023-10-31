
import React from "react";
import MainLayout from "../components/MainLayout";
import HeroStore from "../components/HeroStore";

const PageConstruccion = () => {
    return (
        <MainLayout>

            <main>
                <HeroStore />
                <div className=" ">
                    <h1 className="">
                        Esta pagina todavía no se encuentra disponible
                    </h1>
                    <div className="">
                        <img src="/logo-construccion.png" alt="logo" />
                    </div>
                    <div className="">
                        <button>Home</button>
                        <button>Pagina previa</button>
                    </div>


                </div>
            </main>
        </MainLayout>




    )
}

export default PageConstruccion;