import goodStorage from 'good-storage'

export class ImageUtil {

  static imageList: Record<string, string> = {}

  static storageImageList() {
    this.imageList = goodStorage.get('imageList') || {}
    if (this.isEmpty()) {
      this.loadAllImage()
      goodStorage.set('imageList', this.imageList)
    }
  }

  static loadAllImage() {
    const imgMap = import.meta.glob('../assets/img/**/*.png', { eager: true })
    let absolutePath: string = ''
    let imageName: string = ''
    for(let relativePath in imgMap) {
      absolutePath = (imgMap[relativePath] as {default: string}).default
      if (absolutePath) {
        imageName = absolutePath.substring(absolutePath.lastIndexOf('/') + 1)
      }
      this.imageList[imageName] = absolutePath
    }
  }

  static isEmpty() {
    return !Object.getOwnPropertyNames(this.imageList).length
  }
}