
export const validation = () => {
    const checkInputSpecial = (str: string) => {
        const specialRegExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
        if (specialRegExp.test(str)) {
            str.replace(/\s/g, "");
            return true;
        }
        else {
            console.log("f");
            return false;
        }
    }

    const checkInputNumber = (param: any) => {
        const numberRegExp = /[0-9]/g;
        if (numberRegExp.test(param)) {
            param.replace(numberRegExp, "")
            return true;
        } else {
            return false;
        }
    }

    const checkSpace = (str: string) => {
        const spaceRegExp = /\s/g;;
        if (spaceRegExp.test(str)) {
            return true;
        } else {
            return false;
        }

    }

    const chekIsNan = (num: number) => {
        if (isNaN(num)) {
            return num = 0;
        }
    }

    const handlers = { checkInputSpecial, checkInputNumber, checkSpace, chekIsNan };

    return {
        ...handlers
    }

}

