function trashTask(collection) {
  const index = Math.floor(Math.random() * collection.length)
  return collection[index]
}

function trashPhrase(phrase) {
  const indexphrase = Math.floor(Math.random() * phrase.length)
  return phrase[indexphrase]
}

function generatetrashtalk(options) {
  // console.log('This function will generate trash.')
  // define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // // dummy Data 
  // const options = {
  //   // engineer: 'on',
  //   designer: 'on',
  //   // entrepreneur: 'on'
  // }

  // create a collection to store things user picked up 
  let collection = []
  if (options.role === 'engineer') {
    collection = collection.concat(task.engineer)
  }
  if (options.role === 'designer') {
    collection = collection.concat(task.designer)
  }
  if (options.role === 'entrepreneur') {
    collection = collection.concat(task.entrepreneur)
  }
  // console.log(collection)

  //return error notice if options.role is none
  // if (options = '') {
  //   return '請先選擇噴幹話的對象'
  // }
  // 上列程式有誤，依助教指導修正如下
  if (!options.role) {
    return '請先選擇噴幹話的對象'
  }

  // return the generated trash talk 
  let trash_Task = trashTask(collection)
  let trash_Phrase = trashPhrase(phrase)
  let trash_Talk = trashTask(collection) + trashPhrase(phrase)
  console.log(trash_Talk)
  return trash_Talk

}
// generatetrashtalk()

// export generatetrashtalk function for other files to use
module.exports = generatetrashtalk
