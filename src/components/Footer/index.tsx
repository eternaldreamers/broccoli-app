const GlobalFooter: any = {
  name: "GlobalFooter",
  render() {
    return <div class="footer"></div>;
  },
};

GlobalFooter.install = (Vue: any) =>
  Vue.component(GlobalFooter.name, GlobalFooter);

export default GlobalFooter;
