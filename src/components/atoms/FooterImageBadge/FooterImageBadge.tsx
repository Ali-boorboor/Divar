// * the enamad & ... style component which will get one img property
export default function FooterImageBadge(props: any): JSX.Element {
  return (
    <img src={props.img} className="w-12 h-12 ring-1 rounded-lg ring-zinc-300 object-cover"/>
  )
}