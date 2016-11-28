<?php namespace Hermetic\Ltitools;

use Event;
use Backend;
use System\Classes\PluginBase;

/**
 * ltitools Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Uses Roots API to obtain LMS data
     */
    public $require = [
        'Delphinium.Roots'
    ];

    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'Quiz Tools',
            'description' => 'Tools to present quizzes',
            'author'      => 'hermetic',
            'icon'        => 'icon-cogs'
        ];
    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return [
            'Hermetic\Ltitools\Components\Popquiz' => 'PopQuiz',
            'Hermetic\Ltitools\Components\Videoquiz' => 'VideoQuiz'
        ];
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
        Event::listen('backend.menu.extendItems', function($manager) {
            $manager->addSideMenuItems('Delphinium.Roots', 'delphinium', [
                'Popquiz' => [
                  'label' => 'PopQuiz',
                  'icon'  => 'icon-gamepad',
                  'owner' => 'Hermetic.Ltitools',
                  'group' => 'Quiz Tools',
                  'url' => Backend::url('hermetic/ltitools/popquiz')
                ],
                'Videoquiz' => [
                  'label' => 'VideoQuiz',
                  'icon'  => 'icon-film',
                  'owner' => 'Hermetic.Ltitools',
                  'group' => 'Quiz Tools',
                  'url' => Backend::url('hermetic/ltitools/videoquiz')
                ]
            ]);
        });
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array UNUSED
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate
        return [
            'hermetic.ltitools.some_permission' => [
                'tab' => 'ltitools',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array UNUSED
     */
    public function registerNavigation()
    {
        return []; // Remove this line to activate
        return [
            'ltitools' => [
                'label'       => 'ltitools',
                'url'         => Backend::url('hermetic/ltitools/popquiz'),
                'icon'        => 'icon-thumbs-o-up',
                'permissions' => ['hermetic.ltitools.*'],
                'order'       => 500,
            ],
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void UNUSED
     */
    public function register()
    {

    }

}
