export default function Root(props) {
  return (
    <section>
      <ul>
        <li>about</li>
        <li>mission</li>
        <li>products</li>
        <li>account</li>
      </ul>
      {props.name} is mounted
    </section>
  );
}
