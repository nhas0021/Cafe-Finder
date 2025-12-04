function Map() {
  return (
    <section className="map-section">
      <div className="map-box">
        <img src="src/assets/map.png" className="map-icon"></img>
        <iframe
          title="Cafe map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d88715.20999528133!2d145.0155723653939!3d-37.83991794602396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smelbourne%20cafes!5e0!3m2!1sen!2skw!4v1764832528340!5m2!1sen!2skw" 
          className="map"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
