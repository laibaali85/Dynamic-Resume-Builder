var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
//element//
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    //type
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var telElement = document.getElementById('tel');
    var EducationElement = document.getElementById('Education');
    var expElement = document.getElementById('exp');
    var skillsElement = document.getElementById('skills');
    //** 
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && emailElement && telElement && EducationElement && expElement && skillsElement && usernameElement) {
        ///*************************//////  
        // get values from 
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var tel_1 = telElement.value;
        var Education_1 = EducationElement.value;
        var exp_1 = expElement.value;
        var skills_1 = skillsElement.value;
        ///**
        var username = usernameElement.value;
        var uniquePath_1 = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        ///////**8888888//// *//////////////////
        //[picture element]
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var profilePictureURL = reader_1.result;
            //resume output
            var resumeOutput = "\n            <div class=\"preview\">\n                <h2>RESUME BUILDER</h2>\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"PROFILE PICTURE\" class=\"profilePicture\">") : '', "\n                <p><strong>Name:</strong> ").concat(name_1, "</p>\n                <p><strong>Email:</strong> ").concat(email_1, "</p>\n                <p><strong>Contact No:</strong> ").concat(tel_1, "</p>\n                <h3>Education:</h3>\n                <p>").concat(Education_1, "</p>\n                <h3>Experience:</h3>\n                <p>").concat(exp_1, "</p>\n                <h3>Skills:</h3>\n                <p>").concat(skills_1, "</p> <br>\n            </div>\n            ");
            //**
            var downloadLink = document.createElement('a');
            downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
            downloadLink.download = uniquePath_1;
            //  downloadLink.textContent = 'DOWNLOAD YOUR 2024 RESUME';
            ////////////////////////////////////////////////////
            var resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.classList.remove("hiddden");
                /////////create conatainar for buttons
                var buttonsContainar = document.createElement("div");
                buttonsContainar.id = "buttonsContainar";
                resumeOutputElement.appendChild(buttonsContainar);
                /////////////////ADD PDF
                var downloadButton = document.createElement("button");
                downloadButton.textContent = "DOWNLOAD AS PDF";
                downloadButton.addEventListener("click", function () {
                    window.print(); //to save as pdf
                });
                buttonsContainar.appendChild(downloadButton);
                ///////////////add shareable link
                var shareLinkButton = document.createElement("button");
                shareLinkButton.textContent = "COPY SHAREABLE LINK";
                shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                    var shareableLink, err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                shareableLink = "https://yourdomain.com/resume/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                                //use clipboard api to copy the shareable link
                                return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                            case 1:
                                //use clipboard api to copy the shareable link
                                _a.sent();
                                alert("SHAREABLE LINK COPY TO CLIPBOARD!");
                                return [3 /*break*/, 3];
                            case 2:
                                err_1 = _a.sent();
                                console.error("FAILED TO COPY LINK", err_1);
                                alert("FAILED TO COPY LINK TO CLIPBOARD. PLEASE TRY AGAIN.");
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                buttonsContainar.appendChild(shareLinkButton);
                //**
                resumeOutputElement.appendChild(downloadLink);
                resumeOutputElement.style.display = "block";
            }
            else {
                console.error("The Resume Output Element is missing");
            }
        };
        if (profilePictureFile) {
            reader_1.readAsDataURL(profilePictureFile);
        }
        else {
            // Handle case where no file was selected
            var resumeOutput = "\n            <div class=\"preview\">\n                <h2>RESUME BUILDER</h2>\n                <p><strong>Name:</strong> ".concat(name_1, "</p>\n                <p><strong>Email:</strong> ").concat(email_1, "</p>\n                <p><strong>Contact No:</strong> ").concat(tel_1, "</p>\n                <h3>Education:</h3>\n                <p>").concat(Education_1, "</p>\n                <h3>Experience:</h3>\n                <p>").concat(exp_1, "</p>\n                <h3>Skills:</h3>\n                <p>").concat(skills_1, "</p>\n            </div>\n            ");
            var resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            }
            else {
                console.error("The Resume Output Element is missing");
            }
        }
    }
    else {
        console.error("One or more elements are missing");
    }
});
