let userInput1 = confirm("Press 'OK' if you want to add to your bucket list or view your bucket list.\nPress 'Cancel' if you want to stop.")
let bcktList = []

while (userInput1 != false) {
    let userInput2 = confirm("Press 'OK' if you want to add to your bucket list.\nPress 'Cancel' if you want to view your bucket list.")
    if (userInput2 == true)
        bcktList.push(prompt('Enter your new bucket list item'))
    else
        for (i = 0; i < bcktList.length; i++)
            console.log(bcktList[i])
    userInput1 = confirm("Press 'OK' if you want to add to your bucket list or view your bucket list.\nPress 'Cancel' if you want to stop.")
}

