import workExpirence from "@/lib/workExpirence";
import Head from "next/head";

function hireMe() {
  return (
    <>
      <Head>
        <title>Kamlesh Paul - hire me</title>
      </Head>
      <div id="wapper" className="animated fadeIn">
        <div id="hire-me">
          <div className="container">
            <div className="row card-panel">
              <div className="col s12">
                <h1 className="center">Work which i can do</h1>
                <p className="under-line center">
                  <b
                  >I have {workExpirence} year experience
                    of web development with Laravel,Reactjs. and
                    realtime system like websocket, mqqt ,
                    webRTC i can work with it</b
                  >
                </p>
                <ol>
                  <li>Laravel website with admin panel.</li>
                  <li>
                    Single page application using Laravel with
                    Reactjs
                  </li>
                </ol>
                <p className="right">
                  If you need any above requirement you can mail
                  me at
                  <a style={{ fontSize: "20px", paddingLeft: "2px" }} href="mailto:kamleshpaul414@gmail.com"
                  >kamleshpaul414@gmail.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default hireMe