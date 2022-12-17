const GlobalHeader: any = {
  name: "GlobalHeader",
  render() {
    return (
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand d-flex" href="/">
            <img
              src="https://img.freepik.com/free-vector/sticker-design-with-broccoli-isolated_1308-58801.jpg?w=2000"
              alt="Logo"
              width="40"
              height="34"
              class="d-inline-block align-text-top"
            />
            <div class="text-center ms-2">Broccoli</div>
          </a>
          <div class="d-flex">
            <div class="my-auto">
              <form class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="you have problems?"
                />
                <button
                  class="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </form>
            </div>
            <div class="dropdown ms-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                style="width: 50px;"
                class="rounded-circle dropdown-toggle"
                data-bs-toggle="dropdown"
              />
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="/profile">
                    profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  },
};

GlobalHeader.install = (Vue: any) =>
  Vue.component(GlobalHeader.name, GlobalHeader);

export default GlobalHeader;
