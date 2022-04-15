function preprocessorWhatsapp(text) {
  /* This pre preprocessor have three variable having non stateable name
   *@split1: Split1 is the array containing the split by enter
   *@split2: Split2 is the splitter that splits split 1 by -
   *@split3: Split3 is to split the sender and text
   */
  if (!text) {
    return [];
  } else {
    let split1 = text.split("\n");
    let jsontext = [];
    for (let i = 1; i < split1.length - 1; i++) {
      var temp = {};
      if (!split1[i]) {
        split1[i] = " ";
      }
      let split2 = split1[i].split(" - ");
      if (!split2[1]) {
        split2[1] = " ";
      }
      let split3 = split2[1].split(": ");
      if (!split3[0]) {
        split2[0] = " ";
      }
      temp["date"] = split2[0];
      temp["sender"] = split3[0];
      temp["text"] = split3[1];
      jsontext[i] = temp;
    }
    return jsontext;
  }
}
export default preprocessorWhatsapp;
