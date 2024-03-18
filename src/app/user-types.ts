export enum UserType {
    HelpDesk = 'Help Desk',
    Administrator = 'Administrator',
    FullControl = 'Full Control',
    Download = 'Download',
    Read = 'Read'
  }

export const CAPABILITIES = {
// Add other user types and their capabilities here
// This structure allows easy addition of new user types and capabilities
  [UserType.HelpDesk]: [
    { 
      name: 'DASHBOARD', 
      icon: 'dashboard', 
    },
    { 
      name: 'PENDING ACTION ITEMS', 
      icon: '', 
      children: [
        { name: 'PENDING USERS', icon: 'person_add'},
        { name: 'PENDING APPLICATIONS', icon: 'pending'},
        { name: 'PENDING FRAMEWORKS', icon: 'code'}
      ]
    },
    { 
      name: 'DIGITAL ASSETS', 
      icon: '', 
      children: [
        { name: 'APPLICATIONS', icon: 'touch_app'},
        { name: 'FRAMEWORKS', icon: 'code'},
        { name: 'DOCUMENT LIBRARY', icon: 'book'}
      ]
    },
    { 
      name: 'COMPANY, PO, USERS', 
      icon: '', 
      children: [
        { name: 'USER MANAGEMENT', icon: 'group'},
        { name: 'COMPANY / PO', icon: 'group'},
        { name: 'USER ROSTER', icon: 'group'}
      ]
    },
    { 
      name: 'HELP DESK', 
      icon: '', 
      children: [
        { name: 'TICKETS', icon: 'help'}
      ]
    }
  ],
  [UserType.Administrator]: [
    { 
      name: 'DASHBOARD', 
      icon: 'dashboard', 
    },
    { 
      name: 'USER MANAGEMENT', 
      icon: '', 
      children: [
        { name: 'PENDING ACCESS', icon: 'person_add'},
        { name: 'PERMISSION GROUPS', icon: 'admin_panel_settings'},
        { name: 'USER MANAGEMENT', icon: 'manage_accounts'},
        { name: 'USER ROSTER', icon: 'groups'}
      ]
    },
    { 
      name: 'APPLICATION MANAGEMENT', 
      icon: '', 
      children: [
        { name: 'APPLICATIONS', icon: 'touch_app'},
        { name: 'UPLOAD APPLICATION', icon: 'upload'},
      ]
    },
    { 
      name: 'FRAMEWORK MANAGEMENT', 
      icon: '', 
      children: [
        { name: 'FRAMEWORKS', icon: 'code'},
        { name: 'UPLOAD FRAMEWORKS', icon: 'upload_file'},
      ]
    },
    { 
      name: 'DOCUMENT LIBRARY', 
      icon: '', 
      children: [
        { name: 'MY DOCUMENTS', icon: 'my_library_books'},
        { name: 'LIBRARY', icon: 'local_library'},
      ]
    },
    { 
      name: 'INTERNAL HELP DESK', 
      icon: '', 
      children: [
        { name: 'TICKETS', icon: 'help'}
      ]
    }
  ],
  [UserType.FullControl]: [
    { 
      name: 'DASHBOARD', 
      icon: 'dashboard', 
    },
    { 
      name: 'USER MANAGEMENT', 
      icon: '', 
      children: [
        { name: 'PERMISSION GROUPS', icon: 'admin_panel_settings'},
        { name: 'USER MANAGEMENT', icon: 'manage_accounts'},
        { name: 'USER ROSTER', icon: 'groups'}
      ]
    },
    { 
      name: 'APPLICATION MANAGEMENT', 
      icon: '', 
      children: [
        { name: 'APPLICATIONS', icon: 'touch_app'},
      ]
    },
    { 
      name: 'FRAMEWORK MANAGEMENT', 
      icon: '', 
      children: [
        { name: 'FRAMEWORKS', icon: 'code'},
      ]
    },
    { 
      name: 'DOCUMENT LIBRARY', 
      icon: '', 
      children: [
        { name: 'MY DOCUMENTS', icon: 'my_library_books'},
        { name: 'LIBRARY', icon: 'local_library'},
      ]
    },
    { 
      name: 'INTERNAL HELP DESK', 
      icon: '', 
      children: [
        { name: 'TICKETS', icon: 'help'}
      ]
    }
  ],
  [UserType.Download]: [
    { 
      name: 'DASHBOARD', 
      icon: 'dashboard', 
    },
    { 
      name: 'APPLICATIONS', 
      icon: 'apps', 
    },
    { 
      name: 'FRAMEWORKS', 
      icon: 'code', 
    },
    { 
      name: 'MY DOCUMENTS', 
      icon: 'library_books', 
    },
    { 
      name: 'LIBRARY', 
      icon: 'local_library', 
    },
    { 
      name: 'USER ROSTER', 
      icon: 'groups', 
    },
  ],
  [UserType.Read]: [
    { 
      name: 'DASHBOARD', 
      icon: 'dashboard', 
    },
    { 
      name: 'APPLICATIONS', 
      icon: 'apps', 
    },
    { 
      name: 'FRAMEWORKS', 
      icon: 'code', 
    },
    { 
      name: 'LIBRARY', 
      icon: 'local_library', 
    },
    { 
      name: 'USER ROSTER', 
      icon: 'groups', 
    },
  ],
  // ... other capabilities
};