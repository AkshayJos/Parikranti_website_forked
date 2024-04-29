import "./About_page.css";
import Admin_div from "./admin_div";
import Core_team_member from "./core_team_member";
function About() {
  return (
    <>
      <img className="graphic_img" src="./Images/about_us.png" alt="" />

      <div className="lower-div">
        <div className="info">
          <div className="left-info-div">
            <div className="vmv-div">
              <div className="heading-vision vmv-heading">VISION</div>
              <div className="vmv-text">
                Our Vision is to empower every individual in India to
                successfully implement the SDGs for self-sustainability and a
                better livelihood in the next 25 years.
              </div>
            </div>

            <div className="vmv-div">
              <div className="heading-mission vmv-heading">MISSION</div>
              <div className="vmv-text">
                Our Mission is to cultivate a thriving ecosystem in Bharat that
                empowers young minds, fosters holistic development, and unlocks
                their potential to drive sustainable impact
              </div>
            </div>

            <div className="vmv-div">
              <div className="heading-values vmv-heading">VALUES</div>
              <div className="vmv-text">
                Our main focus on achieving Sustainable development Goals
                (Social, Economical & Environmental Sustainability) in Bharat
                with holistic, innovative, collaborative and resource exchange
                approach.
              </div>
            </div>
          </div>

          <div class="right-info-div">
            <div class="admin-div">
              <div className="admin-heading">HEAD</div>
              <div className="admin-pic">
                <Admin_div />
              </div>
              <div className="admin-text">
                Born from a deep desire to empower the social sector in 2017,
                Parikranti Foundation embarked on a journey to understand the
                true needs of Bharat, NGOs, NPOs, and social reformers.
                Extensive surveys and research revealed a critical gap: while
                numerous organizations were doing commendable work, a lack of
                focus on sustainability often hindered long-term impact. Driven
                by this insight, Parikranti Foundation, a registered Section 8
                company in 2021, emerged with a clear mission: to champion the
                Sustainable Development Goals (SDGs) established by the United
                Nations. We believe in empowering individuals and organizations
                working at the grassroots to create a sustainable development
                ecosystem that fosters positive change for both Earth and
                livelihoods. We actively
                engage with NGOs, social reformers, and stakeholders across the
                social development spectrum, equipping them with the knowledge
                and tools needed to translate their passion into impactful and
                sustainable initiatives. Our ultimate goal? To work
                collaboratively towards achieving every single SDG, ensuring a
                brighter future for all.
              </div>
            </div>
          </div>
        </div>

        <div className="team-member-div">
          <div className="team-member-heading">Our Team Members</div>
          <div class="core-team-member-div">
            <Core_team_member />
            <Core_team_member />
            <Core_team_member />
            <Core_team_member />
            <Core_team_member />
            <Core_team_member />
            <Core_team_member />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
