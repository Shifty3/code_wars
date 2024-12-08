// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:

// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs

// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    // ^\d+_ matches the starting digits and underscore in the beginning
    // ([^\.]+) gets everything up to the first dot
    // (\.[^\.]+) capture the first extension after the first dot
    const regex = /^\d+_([^\.]+\.[^\.]+)/;

    const match = dirtyFileName.match(regex);

    if (match) {
      return match[1];
    }

    return "show me the code!";
  }
}

//create a regex that I can use to filter the file name and compare it with

//hardest part was getting the right regex to work
