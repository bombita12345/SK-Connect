-- SK-CONNECT RLS Policies
-- Security policies for all tables

-- ==================== PROFILES POLICIES ====================
CREATE POLICY "profiles_select_self" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_select_public" ON public.profiles FOR SELECT USING (status = 'active');
CREATE POLICY "profiles_insert_self" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_self" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "profiles_delete_self" ON public.profiles FOR DELETE USING (auth.uid() = id);

-- Admins can view all profiles
CREATE POLICY "profiles_admin_all" ON public.profiles FOR ALL USING (
  (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
);

-- ==================== ANNOUNCEMENTS POLICIES ====================
-- Everyone can read announcements
CREATE POLICY "announcements_select_all" ON public.announcements FOR SELECT USING (true);

-- Authors and admins can modify
CREATE POLICY "announcements_insert_author" ON public.announcements FOR INSERT 
  WITH CHECK (auth.uid() = author_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "announcements_update_author" ON public.announcements FOR UPDATE 
  USING (auth.uid() = author_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "announcements_delete_author" ON public.announcements FOR DELETE 
  USING (auth.uid() = author_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== EVENTS POLICIES ====================
CREATE POLICY "events_select_all" ON public.events FOR SELECT USING (status != 'cancelled' OR auth.uid() = organizer_id);

CREATE POLICY "events_insert_verified" ON public.events FOR INSERT 
  WITH CHECK (auth.uid() = organizer_id AND (SELECT verified FROM public.profiles WHERE id = auth.uid()) = true);

CREATE POLICY "events_update_organizer" ON public.events FOR UPDATE 
  USING (auth.uid() = organizer_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "events_delete_organizer" ON public.events FOR DELETE 
  USING (auth.uid() = organizer_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== EVENT REGISTRATIONS POLICIES ====================
CREATE POLICY "event_registrations_select_self" ON public.event_registrations FOR SELECT 
  USING (auth.uid() = user_id OR auth.uid() = (SELECT organizer_id FROM public.events WHERE id = event_id));

CREATE POLICY "event_registrations_insert_self" ON public.event_registrations FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "event_registrations_update_self" ON public.event_registrations FOR UPDATE 
  USING (auth.uid() = user_id OR auth.uid() = (SELECT organizer_id FROM public.events WHERE id = event_id));

CREATE POLICY "event_registrations_delete_self" ON public.event_registrations FOR DELETE 
  USING (auth.uid() = user_id);

-- ==================== PROJECTS POLICIES ====================
CREATE POLICY "projects_select_all" ON public.projects FOR SELECT 
  USING (status != 'cancelled' OR auth.uid() = creator_id);

CREATE POLICY "projects_insert_admin" ON public.projects FOR INSERT 
  WITH CHECK ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "projects_update_admin" ON public.projects FOR UPDATE 
  USING (auth.uid() = creator_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "projects_delete_admin" ON public.projects FOR DELETE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== PROJECT VOLUNTEERS POLICIES ====================
CREATE POLICY "project_volunteers_select_all" ON public.project_volunteers FOR SELECT 
  USING (auth.uid() = volunteer_id OR auth.uid() = (SELECT creator_id FROM public.projects WHERE id = project_id));

CREATE POLICY "project_volunteers_insert_self" ON public.project_volunteers FOR INSERT 
  WITH CHECK (auth.uid() = volunteer_id);

CREATE POLICY "project_volunteers_update_self" ON public.project_volunteers FOR UPDATE 
  USING (auth.uid() = volunteer_id OR auth.uid() = (SELECT creator_id FROM public.projects WHERE id = project_id));

CREATE POLICY "project_volunteers_delete_self" ON public.project_volunteers FOR DELETE 
  USING (auth.uid() = volunteer_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== BUDGET TRANSPARENCY POLICIES ====================
-- Everyone can read budgets
CREATE POLICY "budget_select_all" ON public.budget_transparency FOR SELECT USING (true);

-- Only admins can modify
CREATE POLICY "budget_insert_admin" ON public.budget_transparency FOR INSERT 
  WITH CHECK ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "budget_update_admin" ON public.budget_transparency FOR UPDATE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "budget_delete_admin" ON public.budget_transparency FOR DELETE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== RESOLUTIONS POLICIES ====================
-- Everyone can read resolutions
CREATE POLICY "resolutions_select_all" ON public.resolutions FOR SELECT USING (true);

-- Only admins can modify
CREATE POLICY "resolutions_insert_admin" ON public.resolutions FOR INSERT 
  WITH CHECK ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "resolutions_update_admin" ON public.resolutions FOR UPDATE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "resolutions_delete_admin" ON public.resolutions FOR DELETE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== FEEDBACK POLICIES ====================
CREATE POLICY "feedback_select_self" ON public.feedback FOR SELECT 
  USING (auth.uid() = user_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "feedback_select_anon_admin" ON public.feedback FOR SELECT 
  USING (is_anonymous = true AND (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "feedback_insert_any" ON public.feedback FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "feedback_update_admin" ON public.feedback FOR UPDATE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "feedback_delete_admin" ON public.feedback FOR DELETE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== DRRM ALERTS POLICIES ====================
-- Everyone can read alerts
CREATE POLICY "drrm_alerts_select_all" ON public.drrm_alerts FOR SELECT USING (true);

-- Only admins can modify
CREATE POLICY "drrm_alerts_insert_admin" ON public.drrm_alerts FOR INSERT 
  WITH CHECK ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "drrm_alerts_update_admin" ON public.drrm_alerts FOR UPDATE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "drrm_alerts_delete_admin" ON public.drrm_alerts FOR DELETE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== VOLUNTEER OPPORTUNITIES POLICIES ====================
CREATE POLICY "volunteer_opp_select_all" ON public.volunteer_opportunities FOR SELECT 
  USING (status != 'closed' OR auth.uid() = creator_id);

CREATE POLICY "volunteer_opp_insert_verified" ON public.volunteer_opportunities FOR INSERT 
  WITH CHECK (auth.uid() = creator_id AND (SELECT verified FROM public.profiles WHERE id = auth.uid()) = true);

CREATE POLICY "volunteer_opp_update_creator" ON public.volunteer_opportunities FOR UPDATE 
  USING (auth.uid() = creator_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "volunteer_opp_delete_creator" ON public.volunteer_opportunities FOR DELETE 
  USING (auth.uid() = creator_id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- ==================== VOLUNTEER APPLICATIONS POLICIES ====================
CREATE POLICY "volunteer_apps_select_self" ON public.volunteer_applications FOR SELECT 
  USING (auth.uid() = volunteer_id OR auth.uid() = (SELECT creator_id FROM public.volunteer_opportunities WHERE id = opportunity_id));

CREATE POLICY "volunteer_apps_insert_self" ON public.volunteer_applications FOR INSERT 
  WITH CHECK (auth.uid() = volunteer_id);

CREATE POLICY "volunteer_apps_update_creator" ON public.volunteer_applications FOR UPDATE 
  USING (auth.uid() = (SELECT creator_id FROM public.volunteer_opportunities WHERE id = opportunity_id));

CREATE POLICY "volunteer_apps_withdraw_self" ON public.volunteer_applications FOR UPDATE 
  USING (auth.uid() = volunteer_id);

CREATE POLICY "volunteer_apps_delete_admin" ON public.volunteer_applications FOR DELETE 
  USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');
