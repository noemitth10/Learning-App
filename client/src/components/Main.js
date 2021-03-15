import { useEffect, useState } from "react";

const Main = () => {
    const [sentences, setSentences] = useState([]);

    useEffect(() => {
        getSentences();
    }, []);

    const getSentences = async() => {
        try {
            const response = await fetch("http://localhost:5000/sentences")
            const jsonData = await response.json()

            setSentences(jsonData);
        } catch (error) {
            console.error(error.message)
        }
    }
    
    return (
        <>
            <div>
                <div className="title-container">
                    <h1>Üdvözlünk!</h1>
                </div>
                <div className="image-container">
                    <img className="main-img" src="https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Scool"/>
                    {/*sentences.map(sentence => (
                        <div key={sentence.sentence_id}>
                            <p>{sentence.sentence}</p>
                        </div>
                    ))*/}
                    
                    <form action="/login">
                        <input className="btn" type="submit" value="Kezdd el a tanulást!" />
                    </form>
                    <div className="bottom-left"><p>Nehezen megy a magyar nyelvtan? Nem tudod, hogyan kellene a mondatokat elemezni? Tanulj az LMEZZ-el, mely egy olyan alkalmazás,
                        ami könnyen a segítségedre lehet házifeladatod elvégzésében. Hiszen rengeteg feladattípuson keresztül, az alkalmazás végig vezet a mondatelemzés rejtelmein.</p></div>
                </div>
                
            </div>
        </>
    )
}

export default Main;