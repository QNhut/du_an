import InlabItem from "../InlabItem";
import PrelabItem from "../PrelabItem";

function Lab4() {
  return (
  <>
    <PrelabItem/>
    <InlabItem/>
    <PrelabItem index={2}/>
    <InlabItem index={2} />
    <PrelabItem index={3}/>
    <InlabItem index={3} />
    <PrelabItem index={4}/>
  </>
  )
}
export default Lab4