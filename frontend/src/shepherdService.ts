import Shepherd from "shepherd.js";
export const useHomeTour = ()=>{

    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark',
            scrollTo: true
        }
    });
tour.addStep({
    id: 'PostNav',
    text: 'Welcome to Post Pro . Lets get familiar to the website !',
    
    classes: 'example-step-extra-class',
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});
tour.addStep({
    id: 'PostNav',
    text: 'Here you Can go and add Posts',
    attachTo: {
        element: '#post',
        on: 'top'
    },
    classes: 'example-step-extra-class',
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});
tour.addStep({
    id: 'PostCreateNav',
    text: 'Here you Can go and Create Posts',
    attachTo: {
        element: '#postcreate',
        on: 'top'
    },
    classes: 'example-step-extra-class',
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});
tour.addStep({
    id: 'LoginNav',
    text: 'Login To start creating posts !',
    attachTo: {
        element: '.LoginNav',
        on: 'top'
    },
    classes: 'example-step-extra-class',
    buttons: [
        {
            text: 'Finish',
            action: tour.next
        }
    ]
});
return tour
}
export const usePostCreationTour= ()=>{
    const PostCreationTour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark',
            scrollTo: true
        }
    });
    
    PostCreationTour.addStep({
        id: 'PostTitle',
        text: 'Enter a Eye Catching title to your post !',
        attachTo: {
            element: '.PostTitle',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        buttons: [
            {
                text: 'next',
                action: PostCreationTour.next
            }
        ]
    })
    PostCreationTour.addStep({
        id: 'PostContent',
        text: 'Explain more about your post !',
        attachTo: {
            element: '.PostContent',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        buttons: [
            {
                text: 'next',
                action: PostCreationTour.next
            }
        ]
    })
    PostCreationTour.addStep({
        id: 'PostSubmit',
        text: 'Submit your Post !',
        attachTo: {
            element: '#PostSubmit',
            on: 'top'
        },
        classes: 'example-step-extra-class',
        buttons: [
            {
                text: 'Finish',
                action: PostCreationTour.next
            }
        ]
    })
    return PostCreationTour
}

