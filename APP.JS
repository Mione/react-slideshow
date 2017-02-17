var Slideshow = React.createClass({
  getInitialState: function () {
    return {
      slides: [
        {
          id: "slide1",
          imagePath: "images/img1.jpg",
          imageAlt: "Slide 1 Image",
          title: "Slide 1",
          subtitle: "Slide 1 Image SubTitle",
          text: "Slide 1 Image Text",
          action: "Slide 1 Image Action",
          actionHref: "href"
        },
        {
          id: "slide2",
          imagePath: "images/img2.jpg",
          imageAlt: "Slide 2 Image",
          title: "Slide 2",
          subtitle: "Slide 2 Image SubTitle",
          text: "Slide 2 Image Text",
          action: "Slide 2 Image Action",
          actionHref: "href"
        },
        {
          id: "slide3",
          imagePath: "images/img3.jpg",
          imageAlt: "Slide 3 Image",
          title: "Slide 3",
          subtitle: "Slide 3 Image SubTitle",
          text: "Slide 3 Image Text",
          action: "Slide 3 Image Action",
          actionHref: "href"
        },
      ],
      currentSlide: 0
    }
  },
  prev: function () {
    var state = this.state.currentSlide;
    state = state - 1;
    if (state < 0) {
      state = this.state.slides.length - 1;
    }
    this.setState({ currentSlide: state });
  },
  next: function () {
    var state = this.state.currentSlide;
    state = state + 1;
    if (state >= this.state.slides.length) {
      state = 0;
    }
    this.setState({ currentSlide: state });
  },
  render: function () {
    return (
      <div className="slideshow">
        <Slides slides={this.state.slides} currentSlide={this.state.currentSlide} />
        <Controls prevHandler={this.prev} nextHandler={this.next} />
      </div>
    )
  }
});

var Slides = React.createClass({
  render: function () {
    var that = this;
    var slidesNodes = this.props.slides.map(function (slideNode, index) {
      var isActive = that.props.currentSlide === index;
      return (
        <Slide active={isActive} key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} title={slideNode.title} subtitle={slideNode.subtitle} />
      );
    });
    return (
      <div className="slides">
        {slidesNodes}
      </div>
    );
  }
});

var Slide = React.createClass({
  render: function () {
    return (
      <div className={'slide ' + (this.props.active ? 'slide--active' : '')}>
        <img src={this.props.imagePath} alt={this.props.imageAlt} width='640px' height='360px'/>
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>

      </div>
    );
  }
});

var Controls = React.createClass({
  render: function () {
    return (
      <div className="controls">
        <button className="btn toggle toggle--prev" onClick={this.props.prevHandler}>Prev</button>
        <button className="btn toggle toggle--next" onClick={this.props.nextHandler}>Next</button>
      </div>
    );
  }
});

ReactDOM.render(<Slideshow />, document.getElementById('app'));