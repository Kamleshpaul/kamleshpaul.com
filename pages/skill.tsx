import Head from "next/head"

function skill() {
  return (
    <>
      <Head>
        <title>Kamlesh Paul - skill</title>
      </Head>
      <div id="wapper" className="animated fadeIn">
        <div id="skill">
          <table>
            <th className="table-style">
              <h1>Front End</h1>
            </th>
            <th>
              <h1>Back End</h1>
            </th>
            <tbody className="right-line">
              <tr>
                <td colSpan={2}>
                  <hr style={{ borderColor: "$3afe1a" }} />
                </td>
              </tr>
              <tr>
                <td>
                  <b>Reactjs</b>
                </td>
                <td className="right">
                  <b>Laravel</b>
                </td>
              </tr>
              <tr>
                <td>TypeScript</td>
                <td className="right">Nodejs</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td className="right">Php</td>
              </tr>
            </tbody>
          </table>

          <hr style={{ borderColor: " #3afe1a" }} />
          <div className="tools">
            <h1 className="center">Tools</h1>
            <p className="center">Vs Code / PhpStorm : Editor</p>
            <p className="center">Ubuntu / Mac : OS</p>
            <p className="center">Git : Version Control</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default skill