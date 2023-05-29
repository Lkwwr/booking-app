import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

    const {data, loading, error} = useFetch("/hotels/countByCity?cities=Almaty,Astana,Kemer")

    return (<div className="featured">
        {loading ? ("Loading please wait") : (<>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/600x600/685481.jpg?k=4bdd14cdd8b0cec50da3eb8020820389e14ca9ef86608dd3b8b1e9e65a32009d&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Almaty</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/600x600/685485.jpg?k=ae62e268e30e07d3f45274429b558d5c3dc40f2bf3351ee47f6cff4b59f227d4&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Astana</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/600x600/654659.jpg?k=9c4ac59d35869485631346dc1ee16d28e82ec5f79654bf56b4b4eaeef3388299&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Kemer</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div>
        </>)}
    </div>)
}

export default Featured;