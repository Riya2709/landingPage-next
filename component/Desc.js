
import laptop from "../public/laptop.jpg";
import mobile from "../public/mobile.jpg";
import ai from "../public/ai.jpg";
import database from "../public/database.jpg";
import back from "../public/back.jpg";

const Desc=()=>{
    return(
    
    <>
    <style jsx>
        {`
    .main{
    width: 100%;
    position: relative;
    background: #e9e9e9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
}
.row1{
    width: 100%;
    display: grid;
    grid-template-areas: "a a a";
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    gap: 20px;
}
.autom{
    display: flex;
    flex-direction: column;
    max-width: 380px;
    font-size: 32px;
    margin: 0 45px;
    position: relative;
}
.dedic{
    width: 100%;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #131313;
}
.yard{
	height: 400px;
    background: url(${back.src});
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content: center;
    align-items: center;
}
.yard h1{
	font-size: 22px;
    font-weight: 600;
    color: #fff
}
.row2{
	width: 85%;
    margin: auto;
    background-color: #202020;
    display: grid;
    grid-template-areas: "a a";
    padding: 20px 20px 20px 170px;
    border-bottom-left-radius: 50%;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    gap: 20px;
    position: relative;
}
.rowd{
	display: grid;
    grid-template-areas: "a a";
}
.rowd .rowdd{
    display: flex;
    padding: 10px;
}
.rowd .rowdd img{
    width: 100px;
    height: 100px;
    margin-right: 10px;
}
.rowddd{
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    margin-left: 10px;
}
.ddd{
    font-size: 18px;
    font-weight: 500;
    color: #fff;
}
.dddp{
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    margin-left: 10px;
    color: white;
}
.logo{
    width: 250px;
    height: 150px;
    margin: 40px 0;
    border-radius: 10px;
    background: #000;
    position: absolute;
    top: -100px;
    left: -100px;
    display: flex;
    justify-content: center;
    align-items: center;

       
}
.logo img{
    width: 200px;
}
div{
    border: 0;
    padding: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
@media (max-width: 900px){
.row1{
    grid-template-areas: 'a';
}
.row2{
    grid-template-areas: "a";
    border-bottom-left-radius: 0;
    padding: 170px 10px 40px 0;
    width: 100%
}
.logo{
    left: 0;
}

}
        `}
    </style>

        
        <div className="main">
             <div className="row1">
                 <div>
                     <h2 className="autom">
                     <span>We Are</span>
                     <br></br>AUTOMATION EXPERTS</h2>
                 </div>
                 <div>
                     <p className="dedic">We Are<strong>Dedicated Engineers Minds </strong>Devoted to <strong>Innovation</strong>, <strong>Bringing Sustainable Life</strong> Through Technology Advancement, Helping Startups and Enterprises Build their ideas into MVP with most anticipated technology in AI, IoT, Robotics, <strong>Borgfy</strong> is committed to delivering the finest quality within budget in Timeframe, last but not least We Shapes Visions.</p>
                 </div>
                 <div className="yard">
                     <h1>“Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.” —Steve Jobs</h1>
                 </div>
             </div>
             <div className="row2">
                  <div className="rowd">
                      <div className="rowdd">
                          <img src={laptop.src}></img>
                          <div className="rowddd">
                              <div className="ddd">Software Development</div>
                              <p className="dddp">We Help you build the best ideas and solve a complex problem with technologies in Saas, Mobile Apps & Custom Software solutions.</p>
                          </div>
                      </div>
                  </div>
                  <div className="rowd">
                  <div className="rowdd">
                          <img src={mobile.src}></img>
                          <div className="rowddd">
                              <div className="ddd">Hardware Development</div>
                              <p className="dddp">We Understand your vision in creating a better product for a better future in making world moves towards Automation.</p>
                          </div>
                      </div>
                  </div>
                  <div className="rowd">
                  <div className="rowdd">
                          <img src={ai.src}></img>
                          <div className="rowddd">
                              <div className="ddd">Artificial Intelligence</div>
                              <p className="dddp">Creating AI for Smooth Functioning and teaching a machine to give the best result towards your complex task where human needs assistance.

                               </p>
                          </div>
                      </div>
                  </div>
                  <div className="rowd">
                  <div className="rowdd">
                          <img src={database.src}></img>
                          <div className="rowddd">
                              <div className="ddd">Design</div>
                              <p className="dddp">Engineering Takes Shapes when given a perfect sleek Design to your vision.</p>
                          </div>
                      </div>
                  </div>
                  <div className="logo">
                      <div>
                          <img src={laptop.src}></img>
                      </div>
                  </div>

             </div>
        </div>
    </>
    );
}
export default Desc;