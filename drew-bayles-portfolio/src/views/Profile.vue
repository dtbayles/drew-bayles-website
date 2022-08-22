<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h1 class="title">Drew Bayles</h1>
                  <h4>Software Engineer</h4>
<!--                  <md-button-->
<!--                    href="javascript:void(0)"-->
<!--                    class="md-just-icon md-simple md-dribbble"-->
<!--                    ><i class="fab fa-dribbble"></i-->
<!--                  ></md-button>-->
<!--                  <md-button-->
<!--                    href="javascript:void(0)"-->
<!--                    class="md-just-icon md-simple md-twitter"-->
<!--                    ><i class="fab fa-twitter"></i-->
<!--                  ></md-button>-->
<!--                  <md-button-->
<!--                    href="javascript:void(0)"-->
<!--                    class="md-just-icon md-simple md-pinterest"-->
<!--                    ><i class="fab fa-pinterest"></i-->
<!--                  ></md-button>-->
                </div>
              </div>
            </div>
          </div>
          <div class="description text-left">
            <h5>
              Divide details about your product or agency work into parts.
              Write a few lines about each one. A paragraph describing a
              feature will be enough.
            </h5>
          </div>

          <div class="section section-basic">
            <div class="container">
              <div class="title">
                <h2>About Me</h2>
              </div>
            </div>
          </div>

          <div class="section section-basic">
            <div class="container">
              <div class="title">
                <h2>My Experience</h2>
              </div>
            </div>
          </div>

          <div class="section section-basic">
            <div class="container">
              <div class="title">
                <h2>Things I've Built</h2>
              </div>
            </div>
          </div>

          <div class="section section-basic">
            <div class="container">
              <div class="title">
                <h2>Other Projects (Academic)</h2>
              </div>
              <BootstrapCard
                  title="Course Name 1"
                  description="Created a full-stack native Android app with a local server, REST API, and SQLite database."
                  :badges="['Android Studio', 'OOP', 'Polymorphism']"
                  completedDate="04/2021"
              >
              </BootstrapCard>
            </div>
          </div>

          <div class="section section-contacts">
            <div class="container">
              <div class="title">
                <h2>Contact Me</h2>
              </div>
              <div class="md-layout">
                <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
                  <h4 class="text-center description">
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one and contact us about any
                    further collaboration. We will responde get back to you in a
                    couple of hours.
                  </h4>
                  <form class="contact-form">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-50">
                        <md-field>
                          <label>Your Name</label>
                          <md-input v-model="name" type="text"></md-input>
                        </md-field>
                      </div>
                      <div class="md-layout-item md-size-50">
                        <md-field>
                          <label>Your Email</label>
                          <md-input v-model="email" type="email"></md-input>
                        </md-field>
                      </div>
                    </div>
                    <md-field maxlength="5">
                      <label>Your Message</label>
                      <md-textarea v-model="message"></md-textarea>
                    </md-field>
                    <div class="md-layout">
                      <div class="md-layout-item md-size-33 mx-auto text-center">
                        <md-button class="md-success">Send Message</md-button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BootstrapCard } from "@/components";
export default {
  components: {
    BootstrapCard
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/personPhoto.jpeg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
