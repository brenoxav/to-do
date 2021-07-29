class Storage {
  data = [];

  setStorage(todosArr) {// eslint-disable-line
    this.data = todosArr;
  }

  getStorage() {// eslint-disable-line
    return this.data;
  }

  hasStorage() {// eslint-disable-line
    if (this.data.length > 0) {
      return true;
    }
    return false;
  }
}

const storage = new Storage();

export { storage as default };