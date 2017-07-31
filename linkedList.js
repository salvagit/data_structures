function LinkedList() {
  let length = 0,
      head = null;

  let Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = () => length;

  this.head = () => head;

  this.add = element => {
    let node = new Node(element);
    if (head === null) head = node;
    else {
      currentNode = head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = element => {
    let currentNode = head,
        previusNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while(currentNode.element !== element){
        previusNode = currentNode;
        currentNode = currentNode.next;
      }
      previusNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = () => length === 0;

  this.indexOf = () => {
    let currentNode = head,
        index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  this.elementAt = (index) => {
    let currentNode = head,
        count = 0;
    while (count < index) {
      count ++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  this.addAt = (index, element) => {
    let node = new Node(element),
        currentNode = head,
        previusNode,
        currentIndex = 0;

    if (index > length) return false;

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while(currentIndex < index){
        currentIndex++;
        previusNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previusNode.next = node;
    }
    length++;
  }

  this.removeAt = (index) => {
    let currentNode = head,
        previusNode,
        currentIndex = 0;
    if (index < 0 || index >= length) return null;
    if (index === 0) head = currentNode.next;
    else {
      while (currentIndex < index) {
        currentIndex++;
        previusNode = currentNode;
        currentNode = currentNode.next;
      }
      previusNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  }
}

let conga = new LinkedList();

conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.size());
