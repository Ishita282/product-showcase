function Section({ children, title }) {
  return (
    <section>
      <h3 className="section-title">{title}</h3>
      <div className="section-text">{children}</div>
    </section>
  );
}

export default Section;