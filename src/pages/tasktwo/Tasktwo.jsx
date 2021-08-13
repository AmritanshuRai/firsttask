import Hero from "../../components/hero/Hero";

import "./tasktwo.styles.scss";
const Tasktwo = () => {
  return (
    <section className="tasktwo">
      <Hero />
      <div className="tasktwo__para">
        <h1>Long paragrapgh to make page scrollable</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
          fringilla turpis. Ut purus nibh, commodo a metus at, sagittis dictum
          dolor. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Suspendisse potenti. Sed mollis ultrices
          dictum. Nam tristique ex fermentum arcu varius suscipit. Nam aliquet
          sem vel quam pulvinar egestas. Phasellus vitae egestas ex. Nulla
          dictum erat nunc, tempus pharetra neque semper eu. Mauris vulputate
          libero vitae eros sodales, nec rhoncus lacus imperdiet. Ut a
          vestibulum neque. In at quam elementum, placerat neque ut, euismod
          diam. Praesent tincidunt aliquam erat, sit amet congue felis
          sollicitudin at. Etiam semper sit amet ipsum eu varius. Nullam
          vulputate nulla sit amet congue semper. Sed mattis convallis enim, et
          vulputate mi semper quis. Nulla nec varius lectus. Proin eu dolor
          vitae leo posuere lobortis sit amet id nunc. Praesent id dictum nulla,
          ultricies placerat justo. Vivamus finibus massa sed sapien scelerisque
          varius. Nam pellentesque ante elit, vitae interdum nisl suscipit id.
          Aenean tincidunt sem elementum ultricies congue. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Quisque fermentum arcu neque, non congue tortor vulputate vel. Donec
          laoreet ipsum a magna sollicitudin, ac condimentum enim tincidunt.
          Quisque ultricies erat sed massa rhoncus, scelerisque interdum dolor
          lacinia. Nullam aliquam, metus id pulvinar venenatis, massa tortor
          gravida sapien, eu pellentesque magna lacus quis tellus. Donec auctor
          est enim, eget venenatis neque lobortis non. Sed tincidunt est id
          sapien auctor, sed tristique enim tincidunt. Nulla quis blandit metus.
          Donec vitae eleifend turpis, eget posuere tortor. Sed vel mi commodo,
          aliquet ante ac, malesuada metus. Vestibulum sodales nunc sit amet
          placerat rutrum. Nulla laoreet sapien in tellus rhoncus, quis ultrices
          nibh tempus. Integer erat ligula, scelerisque faucibus lorem at,
          volutpat suscipit neque. Aenean convallis pharetra blandit. In hac
          habitasse platea dictumst. Morbi ultrices justo ut nibh finibus, non
          posuere dolor finibus. Etiam id interdum eros. Quisque erat lacus,
          commodo auctor quam in, ornare egestas ipsum. Quisque hendrerit nulla
          a interdum consectetur. Vestibulum aliquam odio luctus tristique
          malesuada. Nam augue libero, dapibus a nisl vel, ultricies finibus
          urna. Phasellus consectetur pulvinar nibh, vehicula euismod eros
          pharetra at. Proin interdum, ligula vel posuere pretium, diam risus
          efficitur erat, ac faucibus felis velit a enim. Donec nec suscipit mi.
          Ut aliquam ipsum id massa pulvinar, sit amet euismod lacus placerat.
          Maecenas et urna mi. Sed pulvinar vitae leo eu ultrices. Mauris tortor
          ante, luctus at semper vitae, pretium eu tellus. Donec sed diam
          sapien. Donec in hendrerit augue. Nunc in leo elementum, molestie urna
          sit amet, lobortis nunc. Donec a magna non ligula ultricies elementum
          ut sed ipsum. Proin auctor, nisl non finibus placerat, dui nunc
          ullamcorper leo, eget ullamcorper dui lacus vel lacus. In eleifend
          augue ac mi consectetur hendrerit. Duis ultricies mi in lectus luctus
          consectetur. Etiam at nunc dolor. Nam convallis libero et tincidunt
          interdum. Etiam enim nibh, lacinia et egestas ac, ultricies ac lacus.
        </p>
      </div>

      <div className="tasktwo__embed">
        <iframe
          width="200px"
          height="200px"
          title="youtube video"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </section>
  );
};

export default Tasktwo;
