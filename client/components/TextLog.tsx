
import {textLog} from '../text-log/text-log.ts'


export default function TextLog() {
  
  return (
    <div id="textLogDiv">
      {textLog.map(text => (
        <p key={text}>{text}</p>
      ))}
    </div>
  )
}