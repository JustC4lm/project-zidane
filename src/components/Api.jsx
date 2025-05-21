import { useEffect, useState } from "react";
import axios from "axios"; 
import card from  "../assets/img/card.png"

export default function Api() {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(""); 

    const URL = "https://jsonplaceholder.typicode.com/posts";

    const fetchApi = async () => {
        try {
            const response = await axios.get(URL); 
            setData(response.data); 
        } catch (error) {
            setError("Error: " + error.message); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchApi(); 
    }, []); 

    return (
        <>
            {
                error ? (
                    <p>{error}</p>
                ) : loading ? (
                    <p>Loading...</p>
                ) : (

                    <div className="card grid grid-cols-1 md:grid-cols-3 gap-5">

                    {data.map((datas, index) => (

                        <div className="card p-6 rounded-xl bg-white border-gray-300 border-2 " key={datas.userId}>
                            <img src={card} alt="" className=" rounded-xl object-cover "/>
                            <h1 className="text-lg font-bold mb-2">{datas.title}</h1>
                            <p className="text-sm">{datas.body}</p>
                        </div>

                    ))}        
                    </div>       
                )
            }
        </>
    );
}