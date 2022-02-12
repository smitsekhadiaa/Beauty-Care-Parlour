import react from 'react';
import './Home.scss';
function Home()
{
    return(
        <div>
             <div style={{backgroundImage:"url(https://i.ytimg.com/vi/8owr16eADe0/maxresdefault.jpg) " ,backgroundSize:"cover" , height:"100vh"}}>
                <div style={{ display: "flex", flexDirection: "row", color: "white", backgroundColor: "#435A64", height: "65px" }}>
                    <div>
                        <img src="" />
                    </div>
                    <div>
                        <div style={{paddingTop:"17px"}}>
                        {/* <Link to="/Main" style={{ fontWeight: "bolder", color: "white", padding: "15px", fontSize: "25px",textDecoration:"none"}}>CodeStack</Link> */}
                        </div>
                        {/* <p style={{ fontWeight: "bolder", color: "white", padding: "15px",paddingTop:"18px", fontSize: "25px" }}>CodeStack</p> */}
                    </div>
                    <div style={{ paddingTop: "22px", fontWeight: "5px", paddingRight: "10px" }}>
                        {/* <Link to="/Home" style={{ textDecoration: "none", fontWeight: "bold", color: "white", fontSize: "20px" }}>Home</Link> */}
                    </div>
                    <div>
                        <button style={{ height: "35px", backgroundColor: "transparent", paddingTop: "22px", border: "none", fontSize: "20px" }}>
                            {/* <Link to="/qaSection" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}> Question-Answer Forum</Link> */}
                        </button>
                    </div>
                    <div>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white", paddingTop: "27px", backgroundColor: "transparent" }}>
                                Language
                            </a>
                            {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="/Cprogg">C Programming</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/CPPprogg">C++ Programming</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/Javaprogg">Java</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/Pythonprogg">Python</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/DSA">Data Structures and Algorithms</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/DBMS">Database Management System</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "45px", textAlign: "center" }}>
                    <div className="flip">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">Parlour</h1>
                        </div>

                        <div className="back">
                            <h2>Parlour</h2>
                            <p>Contains Setting up Environment, Basics of C, Codes for C and platforms to practise codes and devlope your coding skills!</p>
                            <button className="btn btn-info" >Discover me</button>
                        </div>
                    </div>
                    <div className="flip">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">Lazer</h1>
                        </div>
                        <div className="back" style={{backgroundColor:"yellow" , color:"black"}}>
                            <h2>Lazer</h2>
                            <p>Contains Setting up Environment, Basics of C++, Object Oriented Programming, Codes for C++ and platforms to practise codes and devlope your coding skills!</p>
                            <button className="btn btn-info" >Discover me</button>
                        </div>
                    </div>
                    <div className="flip">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">Urja</h1>
                        </div>
                        <div className="back">
                            <h2>Urja</h2>
                            <p>Setting up Environment, Basics of Java, Object Oriented Programming, and platforms to practise codes and devlope your coding skills!</p>
                            <button className="btn btn-info" >Discover me</button>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="flip flip-vertical">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">Ozone</h1>
                        </div>
                        <div className="back">
                            <h2>Ozone</h2>
                            <p>Setting up Environment, Basics of Python, Object Oriented Programming, and platforms to practise codes and devlope your coding skills!</p>
                            <button className="btn btn-info" >Discover me</button>
                        </div>
                    </div>
                    <div className="flip flip-vertical">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">Derma</h1>
                        </div>
                        <div className="back">
                            <h2>Derma</h2>
                            <p>Basics of DataStructures and Algorithms, playlist of videos, DSA450 questions with solutions,Competitive Coding Websites</p>
                            <button className="btn btn-info">Discover me</button>
                        </div>
                    </div>
                    <div className="flip flip-vertical">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">Facials</h1>
                        </div>
                        <div className="back">
                            <h2>Facials</h2>
                            <p>Complete Setting up MariaDB, resources and playlists of Data Base Management System and Structured Query Language (SQL).</p>
                            <button className="btn btn-info">Discover me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;