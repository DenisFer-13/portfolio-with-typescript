import picture from "../../Img/profile-pic.jpg";
import styles from "./Cv.module.css";

function Cv() {
  return (
    <section className={styles.article}>
      <header>
        <figure>
          <img src={picture} />
        </figure>
        <hgroup>
          <h1>DENIS FERREYRA</h1>
          <h2>FULL STACK DEVELOPER</h2>
        </hgroup>
      </header>
      <div className={styles.container}>
        <article className={styles.leftSection}>
          <div>
            <h3>PERFIL</h3>
            <p>
              Soy una persona ambiciosa, con ganas de demostrar mis capacidades,
              tanto técnicas, como interpersonales, para lograr la consecución
              de objetivos en común. Ofrezco mis conocimientos técnicos, mi
              determinación, trabajo, voluntad y ganas de aprender.
            </p>
          </div>
          <div>
            <h4>TECNOLOGÍAS</h4>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React</p>
            <p>Node</p>
            <p>Express</p>
            <p>PostgreSQL</p>
          </div>
          <div>
            <h4>CONTACTO</h4>
            <p>GITHUB: /DenFer-13</p>
            <p>EMAIL: denof59@gmail.com</p>
            <p>LinkedIn: /denis-ferreyra</p>
          </div>
        </article>
        <article>
          <div>
            <h6>EXPERIENCIA LABORAL</h6>
            <div>
              <div>
                <h3>AYUDANTE BOOTCAMP FRONT-END MERCADOLIBRE</h3>
                <h4>Digital House | Noviembre 2021 - Presente</h4>
                <p>
                  Soy parte del equipo que llevó a cabo exitosamente la
                  capacitación de una camada de programadores de MercadoLibre de
                  toda latinoamérica a través del programa IT Bootcamp
                  Front-End, enseñando tecnologías propietarias de la compañía.{" "}
                  <br /> Durante la cursada se trabajamos dictando clases,
                  generando contenido, realizando correcciones y asistiendo a
                  los alumnos durante el proceso de aprendizaje, obteniendo un
                  nps de satisfacción de mas del 80%.
                </p>
              </div>
              <div>
                <h3>DIBUJANTE TÉCNICO - DISEÑADOR GRÁFICO</h3>
                <h4>Estudio Técnico Leguizamón | Abril 2015 - Agosto 2021</h4>
                <p>
                  Fui el encargado de llevar a cabo el diseño en computadora de
                  los planos, modelos y gráficas de la compañía. <br /> También
                  me encargaba de gestionar la documentación y realizar trabajo
                  en obra, como realizar mediciones o coordinar pequeños equipos
                  de trabajo.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Cv;
