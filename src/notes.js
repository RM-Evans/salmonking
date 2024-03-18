import ryleko from './img/ryleko1.png'
import woozwhee from './img/woozwheehpbd37.png'
import adders from './img/adders.png'
import fihsei1 from './img/fihsei1.png'
import lcolonq from './img/LCOLONQ.png'
import './notes.css'

function notes() {
  const notes = [
    {
      id: '0',
      picture: '',
      note: `Unknown artist by the name of 37 
      Picking up their pen of silk, Creating wonders 
      Each creation being a blessing from heavens 
      Without any mistake, they had made no blunders
      
      In a few strokes, they depicted 
      An image from their conception
      Vague idea of their perception
      That none would have predicted
      
      Genius veiling their face behing a disguise, 
      A pleasant and kind persona that symbolize 
      Not only an idol but also a friend!
      A virtuous and kind soul that bounds knows no end.`,
      username: 'Shunn_Kon',
    },
    {
      id: '1',
      picture: ryleko,
      note: `Happy Birthday -Ry`,
      username: 'Ryleko_',
    },
    {
      id: '2',
      picture: woozwhee,
      note: ``,
      username: 'woozwhee',
    },
    {
      id: '3',
      picture: '',
      note: `Happy Birthday, hope you have a good one!!`,
      username: 'Saiykik',
    },
    {
      id: '4',
      picture: adders,
      note: `Happy bday precious bean.
      You're at the doorstep of the chaotic miredom called workforce full of uncertainties and routes you could take. I'm sure it's daunting but let me assure you that whichever path you choose each will prove a worthwhile experience by the end. Why - cause you're a diligent and strong person that's honest about their passions. You've got this so let us celebrate how far you've come in life`,
      username: 'Adders',
    },
    {
      id: '5',
      picture: '',
      note: `Happy Birthday 37 :) 
      I'm grateful that I get the chance to joke around, chat (especially about Thai stuff), and watch you draw every week. I hope this year brings you a lot of opportunities and plenty of adventures. It's been cool to see your stream and community grow over the last few months, I'm looking forward to seeing you grow even further :)`,
      username: 'Jawsbreaker',
    },
    {
      id: '6',
      picture: fihsei1,
      note: ``,
      username: 'Fihsei',
    },
    {
      id: '7',
      picture: lcolonq,
      note: ``,
      username: 'LCOLONQ',
    },
    {
      id: '8',
      picture: '',
      note: `Happy Birthday 37! Thanks for all the chill 'short' streams and good vibes when I'm up working in the AM-s. I love your work and I hope to continue being a part of your art journey for the next 4-5 years (average salmon lifespan) <3`,
      username: 'Kusabii',
    },
    {
      id: '9',
      picture: '',
      note: `Happy Birthday 37!! Tysm for your comfy streams and beautiful art. I havent been able to come as often lately since you seem to stream when I...Fall asleep...HOWEVER, I hope you have a good day! Please continue blessing us with your streams, art and friendship!`,
      username: 'kaoiame',
    },
  ]

  const allNotes = notes.map((note) => (
    <div className="note">
      <img alt="" src={note.picture} className="noteImg" />
      <div className="noteSection">
        <p>{note.note}</p>
        <div key="id">
          - <span className="usernameText">{note.username}</span>
        </div>
      </div>
    </div>
  ))
  return <div className="notesContainer">{allNotes} </div>
}

export default notes
