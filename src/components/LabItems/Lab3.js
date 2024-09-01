import InlabItem from "../InlabItem";
import PrelabItem from "../PrelabItem";

function Lab3() {
  return (
    <>
      <PrelabItem/>
      <InlabItem/>
      <PrelabItem index={2}/>
      <InlabItem index={2} />
      <PrelabItem index={3}/>
  </>
  )
}
export default Lab3