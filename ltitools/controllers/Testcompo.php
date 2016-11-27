<?php
/**
 * Copyright (C) 2012-2016 Project Delphinium - All Rights Reserved
 *
 * This file is subject to the terms and conditions defined in
 * file 'https://github.com/ProjectDelphinium/delphinium/blob/master/EULA',
 * which is part of this source code package.
 *
 * NOTICE:  All information contained herein is, and remains the property of Project Delphinium. The intellectual and technical concepts contained
 * herein are proprietary to Project Delphinium and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained
 * from Project Delphinium.
 *
 * THE RECEIPT OR POSSESSION OF THIS SOURCE CODE AND/OR RELATED INFORMATION DOES NOT CONVEY OR IMPLY ANY RIGHTS
 * TO REPRODUCE, DISCLOSE OR DISTRIBUTE ITS CONTENTS, OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT IT  MAY DESCRIBE, IN WHOLE OR IN PART.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Non-commercial use only, you may not charge money for the software
 * You can modify personal copy of source-code but cannot distribute modifications
 * You may not distribute any version of this software, modified or otherwise
 */
namespace Hermetic\Ltitools\Controllers;

use BackendMenu;
use Backend\Classes\Controller;
use Flash;

/**
 * Testcompo Back-end Controller
 */
class Testcompo extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController'
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';

    public function __construct()
    {
        parent::__construct();

	//TODO: When the new structure of ProjectDelphinium is ready this line below will need to be updated to
	//BackendMenu::setContext('Delphinium.Roots', 'delphinium', ucfirst{{lowerPlugin}}); 
	//because Greenhouse won't be a thing in the new structure anymore.
	BackendMenu::setContext('Delphinium.Greenhouse', 'greenhouse', 'greenhouse');
    }


    public function index()
    {
        $this->listRefresh();
        $this->bodyClass = 'compact-container';
    }
    
    /**
     * Delete checked instances.
     * called from /controllers/list_toolbar.htm Remove button
     */

    public function index_onDelete()
    {
        if (($checkedIds = post('checked')) && is_array($checkedIds) && count($checkedIds)) {

            foreach ($checkedIds as $id) {
                if (!$obj = MyModel::find($id)) continue;
                $obj->delete();
            }

            Flash::success("Successfully deleted");
        }
        else {
            Flash::error("An error occurred when trying to delete the selected item");
        }

        return $this->listRefresh();

    }

}
