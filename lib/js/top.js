(function () {
  var $_window = $(window),
    scroll = $_window.scrollTop(),
    wH = $_window.height(),
    wW = $_window.width(),
    current;

  $_window.on("resize", function () {
    (scroll = $_window.scrollTop()),
      (wH = $_window.height()),
      (wW = $_window.width());
  });
  $_window.on("scroll", function () {
    scroll = $_window.scrollTop();
  });

  /*----------------------------------------------------
    * Observer
  ----------------------------------------------------*/
  function Observer() {
    this.listeners = {};
  }
  Observer.prototype = {
    on: function (event, func) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(func);
    },
    off: function (event, func) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(func);
    },
    trigger: function (event, args) {
      if (!this.listeners[event]) {
        return;
      }
      var ref = this.listeners[event];
      for (var i = 0, len = ref.length; i < len; i++) {
        var listener = ref[i];
        if (typeof listener === "function") listener(args);
      }
    },
  };

  /*----------------------------------------------------
    * SectionModuleSuper
  ----------------------------------------------------*/
  function SectionModuleSuper() {}
  SectionModuleSuper.prototype = {
    super: function (section, obj) {
      this.$_section = $(section);
      this.Obs = new Observer();

      this.state = 0;
      this.setHeight();
    },
    on: function (eventType, callback) {
      switch (eventType) {
        case "Start":
          this.Obs.on("Start", callback.bind(this));
          break;
        case "Reset":
          this.Obs.on("Stop", callback.bind(this));
          break;
        case "Parallax":
          this.Obs.on("Parallax", callback.bind(this));
          break;
        default:
          console.log("error");
      }
    },
    Start: function () {
      this.Obs.trigger("Start", {});
      this.$_section.addClass("active");
      this.state = 1;
    },
    Reset: function () {
      this.Obs.trigger("Reset", {});
      this.state = 0;
    },
    Parallax: function (rate) {
      //this.Obs.trigger("Parallax", { rate: rate });
    },
    setHeight: function () {
      this.pos = this.$_section.offset().top;
      this.h = this.$_section.height();
    },
  };
  /*----------------------------------------------------
    * mv
  ----------------------------------------------------*/
  function SectionMv(section, obj) {
    this.initialize(section, obj);
  }
  SectionMv.prototype = Object.create(SectionModuleSuper.prototype);
  SectionMv.prototype.initialize = function (section, obj) {
    this.super(section, obj);
    this.index = 1;

    this.handleEvents();
    this.setMvSize();
  };
  SectionMv.prototype.handleEvents = function () {
    var self = this;

    self.on("Start", function () {});
  };
  SectionMv.prototype.setMvSize = function () {
    $(".js-mv").css("height", wH + "px");
    $_window.on("resize", function () {
      $(".js-mv").css("height", wH + "px");
    });
  };

  /*----------------------------------------------------
    * About
  ----------------------------------------------------*/
  function SectionAbout(section, obj) {
    this.initialize(section, obj);
  }
  SectionAbout.prototype = Object.create(SectionModuleSuper.prototype);
  SectionAbout.prototype.initialize = function (section, obj) {
    this.super(section, obj);
    this.index = 1;

    this.handleEvents();
  };
  SectionAbout.prototype.handleEvents = function () {
    var self = this;

    self.on("Start", function () {});
  };

  /*----------------------------------------------------
    * Skills
  ----------------------------------------------------*/
  function SectionSkills(section, obj) {
    this.initialize(section, obj);
  }
  SectionSkills.prototype = Object.create(SectionModuleSuper.prototype);
  SectionSkills.prototype.initialize = function (section, obj) {
    this.super(section, obj);
    this.index = 1;

    this.handleEvents();
  };
  SectionSkills.prototype.handleEvents = function () {
    var self = this;

    self.on("Start", function () {});
  };

  /*----------------------------------------------------
    * Works
  ----------------------------------------------------*/
  function SectionWorks(section, obj) {
    this.initialize(section, obj);
  }
  SectionWorks.prototype = Object.create(SectionModuleSuper.prototype);
  SectionWorks.prototype.initialize = function (section, obj) {
    this.super(section, obj);
    this.index = 1;

    this.handleEvents();
  };
  SectionWorks.prototype.handleEvents = function () {
    var self = this;

    self.on("Start", function () {});
  };

  /*----------------------------------------------------
    * Blog
  ----------------------------------------------------*/
  function SectionBlog(section, obj) {
    this.initialize(section, obj);
  }
  SectionBlog.prototype = Object.create(SectionModuleSuper.prototype);
  SectionBlog.prototype.initialize = function (section, obj) {
    this.super(section, obj);
    this.index = 1;

    this.handleEvents();
  };
  SectionBlog.prototype.handleEvents = function () {
    var self = this;

    self.on("Start", function () {});
  };

  /*----------------------------------------------------
    * Footer
  ----------------------------------------------------*/
  function SectionFooter(section, obj) {
    this.initialize(section, obj);
  }
  SectionFooter.prototype = Object.create(SectionModuleSuper.prototype);
  SectionFooter.prototype.initialize = function (section, obj) {
    this.super(section, obj);
    this.index = 1;

    this.handleEvents();
  };
  SectionFooter.prototype.handleEvents = function () {
    var self = this;

    self.on("Start", function () {});
  };

  /*----------------------------------------------------
    * ScrollAnimation
  ----------------------------------------------------*/
  function ScrollAnimation() {
    this.initialize();
  }
  ScrollAnimation.prototype = {
    initialize: function () {
      this.Obs = new Observer();
      this.sections = ["mv", "about", "skills", "works", "blog", "footer"];
      this.sectionObjects = {
        mv: new SectionMv("#mv", this),
        about: new SectionAbout("#aboutAbout", this),
        skills: new SectionSkills("#skills", this),
        works: new SectionWorks("#works", this),
        blog: new SectionBlog("#blog", this),
        footer: new SectionFooter("#footer", this),
      };

      this.current;

      this.handleEvents();

      return this;
    },
    handleEvents: function () {
      var self = this;

      $_window.on("load resize", function () {
        self.setSectionHeight();
        self.ScrollEvent();
      });
      $_window.on("scroll", function () {
        self.ScrollEvent();
      });
    },
    on: function (eventType, callback) {
      switch (eventType) {
        case "scroll":
          this.Obs.on("scroll", callback.bind(this));
          break;
        default:
          console.log("error");
      }
    },
    getSection: function (index) {
      var i = index - 1;
      return this.sections[i];
    },
    Reset: function (section) {
      if (this.sectionObjects[section]) {
        this.sectionObjects[section].Reset();
      }
    },
    Start: function (section) {
      if (this.sectionObjects[section]) {
        this.sectionObjects[section].Start();
      }
    },
    paraStart: function (section, rate) {
      if (this.sectionObjects[section]) {
        this.sectionObjects[section].Parallax(rate);
      }
    },
    ScrollEvent: function () {
      var len = this.sections.length;

      for (var i = 0; i < len; i++) {
        var sectionName = this.sections[i],
          animateSection = this.sectionObjects[sectionName],
          position01 = animateSection.pos - wH * 0.5,
          position02 = animateSection.pos + wH * 0.5,
          position01_para = animateSection.pos - wH * 1.5,
          position02_para = animateSection.pos + wH * 1.5,
          scroll02 = scroll + wH / 2;
        if (!animateSection.state) {
          if (position01 < scroll && scroll < position02) {
            this.Start(sectionName);
          }
        }
        if (position01_para < scroll && scroll < position02_para) {
          var rate = (scroll - (animateSection.pos - wH)) / animateSection.h;
          rate = Math.round(rate * 100) - 100;
          if (100 < rate) {
            rate = 100;
          } else if (rate < -100) {
            rate = -100;
          }
          this.paraStart(sectionName, rate);
        }
        if (
          animateSection.pos < scroll02 &&
          scroll02 < animateSection.pos + animateSection.h
        ) {
          current = sectionName;
        }
      }
      this.Obs.trigger("scroll", {
        current: current,
      });
    },
    setSectionHeight: function () {
      var len = this.sections.length;
      for (var i = 0; i < len; i++) {
        var sectionName = this.sections[i];
        this.sectionObjects[sectionName].setHeight();
      }
    },
  };

  $(function () {
    var SA = new ScrollAnimation();
    SA.on("scroll", function (event) {
      if (!event.current) {
        return false;
      }
      var _current = event.current;
      if (_current == "skills") {
        _current = "about";
      }
      var $_menu = $(".gMenu_li.gMenu_li-" + _current);
      $(".gMenu_li").not($_menu).removeClass('current');
      if (!$_menu.hasClass("current")) {
        $_menu.addClass("current");
      }
    });
  });
})();
